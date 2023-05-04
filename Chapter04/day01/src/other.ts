import cheerio from "cheerio";
import fs from "fs";
import { OtherType } from './crowller'

interface Course {
    title: string,
    count: number
}

interface CourseResult {
    time: number,
    data: Course[]
}

interface Content {
    [propName: number]: Course[]
}


export default class Other implements OtherType{
   private courseInfo(html: string) {
        const $ = cheerio.load(html);
        const courseInfoList: Course[] = [];
        const courseItems = $('.course-item')
        courseItems.map((index,element)=>{
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(descs.eq(1).text().split('：')[1]);
            courseInfoList.push({title,count})
        })
        const result  = {
            time: new Date().getTime(),
            data: courseInfoList
        }
        return result
    }

    private generateJsonContent(result: CourseResult,filePath:string) {
        let fileContent: Content = {};
        if(fs.existsSync(filePath)){
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        fileContent[result.time] = result.data

        return fileContent

    }

    public analyze(html: string, filePath:string){
        const result = this.courseInfo(html);
        const fileContent = this.generateJsonContent(result,filePath);
        return JSON.stringify(fileContent)

    }
}
