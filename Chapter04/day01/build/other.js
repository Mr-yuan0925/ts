"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
class Other {
    courseInfo(html) {
        const $ = cheerio_1.default.load(html);
        const courseInfoList = [];
        const courseItems = $('.course-item');
        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(descs.eq(1).text().split('：')[1]);
            courseInfoList.push({ title, count });
        });
        const result = {
            time: new Date().getTime(),
            data: courseInfoList
        };
        return result;
    }
    generateJsonContent(result, filePath) {
        let fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[result.time] = result.data;
        return fileContent;
    }
    analyze(html, filePath) {
        const result = this.courseInfo(html);
        const fileContent = this.generateJsonContent(result, filePath);
        return JSON.stringify(fileContent);
    }
}
exports.default = Other;
