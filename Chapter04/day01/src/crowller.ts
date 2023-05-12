// ts -> .d.ts 翻译文件 -> js\
import fs from "fs";
import path from "path";
import superagent from 'superagent'
import Other from './other'

export interface OtherType {
    analyze: (html:string,filePath: string) => string
}


class Crowller {
    private filePath = path.resolve(__dirname, '../data/course.json');
    // 获取页面的html
    private rawHtml = '';

    async getRwaHTML() {
        const result = await superagent.get(this.url);
        return result.text
    }

    writeFile(content: string){
        fs.writeFileSync(this.filePath,JSON.parse(content))
    }

    async initSpiderProcess() {
        const html = await this.getRwaHTML();
        const fileContent = this.other.analyze(html, this.filePath)
        this.writeFile(JSON.stringify(fileContent));

    }
    constructor(private url: string, private other: OtherType) {
        this.initSpiderProcess();
    }
}

export default Crowller
