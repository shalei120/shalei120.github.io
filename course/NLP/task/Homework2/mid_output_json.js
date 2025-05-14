/**
 * 培训考试报告
 * 此模块包含：
 * 1、培训内容【培训方式、培训时间地点、主讲人及学时学分、参加人学时学分、应参加培训人数、实际参加培训人数、缺勤人数、参加培训率】
 * 2、考试内容【考试内容/方式、考试时间/地点、学时/学分、应参加考试人数、实际参加考试人数、缺勤人数、参加考试率、及格人数、不及格人数、及格率】
 * 3、培训分析【培训各科室缺勤人次统计、培训各科室迟到人次统计、培训存在问题分析、各科室参与培训人次分析】
 * 4、考试分析【各科室参与考试人次分析、考试各科室缺考人次统计、考试各科室补考人次统计、理论知识考试各项目平均成绩分析、理论知识考试近五年平均成绩分析、理论知识考试各科系平均成绩分析、理论知识考试各科室平均成绩分析、理论知识考试不及格人员科室分布、考试不合格人员层级分布、考试不及格人员成绩分布、理论知识考试未参加人员科室分布、理论知识考试错题统计】
 * 5、考试结果【科室、工号、姓名、层级、岗位、理论考试成绩、操作考试成绩】
 * 6、存在问题及分析【存在问题、评价分析、改进措施】
 * 六个模块
 */
/**
 * 培训考试报告主要包含的语义映射如下
 */
let pageTarget = {
    "培训内容": "trainingContents",
    "考试内容": "examContents",
    "培训各科室缺勤人次统计": "noJoin",
    "培训各科室迟到人次统计": "offTime",
    "培训存在问题分析": "trainingQuestion",
    "各科室参与培训人次分析": "joinWard",
    "各科室参与考试人次分析": "joinExam",
    "考试各科室缺考人次统计": "noJoinExam",
    "考试各科室补考人次统计": "reJoinExam",
    "理论知识考试各项目平均成绩分析": "theoryItemAvgScore",
    "理论知识考试近五年平均成绩分析": "theoryRecentAvgScore",
    "理论知识考试各科系平均成绩分析": "theoryDepartAvgScore",
    "理论知识考试各科室平均成绩分析": "theoryWardAvgScore",
    "理论知识考试不及格人员科室分布": "theoryNoPassWard",
    "考试不合格人员层级分布": "noPassEmpLevel",
    "考试不及格人员成绩分布": "noPassScoreRange",
    "理论知识考试未参加人员科室分布": "noJoinWard",
    "理论知识考试错题统计": "errorQuestion",
    "考试结果": "scoreResults",
    "存在问题": "existQuestion",
    "评价分析": "evaluationAnalysis",
    "改进措施": "improvementMeasures",

}
/**
 * 培训考试分析报告   培训内容  需要返回数据如下
 */
let  trainingContents= {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "trainingContents",
        "confidence": 0.95,
        "parameters": {
            "value": [{
                "id": "271ccf04be334a1aacd9f93faadee7b1",
                "trainingTypeId": "10",
                "trainingTypeName": "理论知识",//培训类型
                "trainingSpeaker": "p6262",
                "trainingRemark": "全院|正式护士",  // 培训对象
                "wardCode": "8888",
                "wardName": "护理部",
                "trainingContent": "00001",  // 培训内容
                "trainingLine": "1",  // 培训方式
                "trainingLineName": "线下培训",//培训方式文本
                "surveyType": null,
                "analysis": null,
                "improvement": null,
                "reportState": null,
                "trainingAwardTypeId": "00",
                "isAllocation": "0",
                "trainingNum": "5111",
                "trainingCategoryId": "000_001_001_hme3egj8",
                "trainingCategoryName": "出科考核-业务查房",
                "sessionTotalNum": "1",
                "speakerHours": "10",
                "trainingCoursewareName": null,
                "trainingAwardTypeName": "无学时学分",
                "awardType": null,
                "indexNum": 1,
                "joinTrainingNum": "0",//实际参加培训数
                "noJoinNum": "5111",//未参加培训数
                "joinRate": "0.00",//参加培训率
                "sessionStr": {//培训场次
                    "items": [
                        {
                            "item": {
                                "contents": [
                                    {
                                        "style": {},
                                        "text": "2025-05-22 00:00~2025-05-31 23:59 hg"//培训时间和地点
                                    }
                                ],
                                "paragraphStyle": {}
                            },
                            "level": 0
                        }
                    ],
                    "formats": [
                        {
                            "numFmt": 1,
                            "lvlText": "%1."
                        }
                    ]
                },
                "speakerCreditStr": "p6262(10/-)"  //主讲人和学时学分
            }
            ]
        }
    } ]
}
/**
 * 培训考试分析报告  考试内容  需要返回数据如下
 */
let  examContents= {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "examContents",
        "confidence": 0.95,
        "parameters": {
            "value": [
                {
                    "id": "9233ee0293404eb7bedff0c8853d58a2",
                    "checkLine": "1",
                    "checkLineName": "线下考核",//考核方式
                    "time": null,
                    "examAwardTypeId": "00",
                    "examAwardTypeName": "无学时学分",//学时学分
                    "examHours": null,
                    "examCredits": null,
                    "examContent": "243",//考试内容
                    "examObject": "全院|正式护士|排除借调出去(当前不在本科室)的人员",  //考试对象
                    "passingScore": 60,
                    "dataFrom": "03",
                    "wardCode": "8888",
                    "wardName": "护理部",
                    "checkEvaluate": null,
                    "trainingExamType": "00",//培训考试类型
                    "isEvaluate": null,
                    "month": "05",//月份
                    "year": null,
                    "isAllocation": "1",
                    "isMakeUp": null,
                    "makeupEndTime": null,
                    "sessionTotalNum": "1",
                    "quizzesProportion": "100",
                    "examNum": "2",//考试人数
                    "checkValidBegin": "2025-05-23 00:00",
                    "checkValidEnd": "2025-05-31 23:59",
                    "isExamEndSign": "0",
                    "indexNum": 1,
                    "joinExamNum": "0",//参加考试人数
                    "noJoinNum": "2",//未参加考试人数
                    "joinRate": "0.00",//考试参加率
                    "passNum": "0",//通过考试人数
                    "noPassNum": "0",//未通过考试人数
                    "passRate": "0.00",//通过率
                    "sessionStr": {
                        "items": [//考试场次
                            {
                                "item": {
                                    "contents": [
                                        {
                                            "style": {},
                                            "text": "2025-05-23 00:00~2025-05-31 23:59 34"//考试时间和地点
                                        }
                                    ],
                                    "paragraphStyle": {}
                                },
                                "level": 0
                            }
                        ]
                    }
                }
            ]
        }
    } ]
}
/**
 * 培训考试分析报告培训   各科室缺勤人次统计   需要返回数据如下
 */
let  noJoin = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "noJoin",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "人",//单位
                "name": "培训各科室缺勤人次统计",//统计标题
                "data": [
                    {
                        "name": "临床服务",//科室名称
                        "subject": null,
                        "value": 744,//人数
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": ""
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   培训各科室迟到人次统计   需要返回数据如下
 */
let  offTime = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "offTime",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "人",//单位
                "name": "培训各科室迟到人次统计",//统计标题
                "data": [
                    {
                        "name": "临床服务",//科室名称
                        "subject": null,
                        "value": 2,//人数
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": ""
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   培训存在问题分析   需要返回数据如下
 * 可以语音识别“查询培训存在问题前4条”
 */
let  trainingQuestion = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "trainingQuestion",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "%",
                "name": "培训存在问题分析",
                "data": [//按顺序返回语音中要求的前几条数据
                    {
                        "name": "NPS量表",//存在问题
                        "subject": "TOP1",//排序文字
                        "value": "4",
                        "count": null,
                        "proportion": 55,//存在问题比率
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   各科室参与培训人次分析   需要返回数据如下
 * 可以语音识别“查询各科室参与培训人次前4条”
 */
let  joinWard = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "joinWard",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "人",
                "name": "培训各科室迟到人次统计",
                "data": [//按顺序返回语音中要求的前几条数据
                    {
                        "name": "中医科",//科室名称
                        "subject": "6",
                        "value": 6,//参与数量
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   各科室参与考试人次分析   需要返回数据如下
 * 可以语音识别“查询各科室参与考试人次前4条”
 */
let  joinExam = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "joinExam",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "人",
                "name": "各科室参与考试人次分析",
                "data": [//按顺序返回语音中要求的前几条数据
                    {
                        "name": "中医科",//科室名称
                        "subject": "6",
                        "value": 6,//参与数量
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   考试各科室缺考人次统计   需要返回数据如下
 */
let  noJoinExam = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "noJoinExam",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "人",
                "name": "各科室缺考人次分析",
                "data": [
                    {
                        "name": "心血管一区",//科室
                        "subject": null,
                        "value": 415,//人数
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   考试各科室补考人次统计   需要返回数据如下
 */
let  reJoinExam = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "reJoinExam",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "人",
                "name": "各科室补考人次分析",
                "data": [
                    {
                        "name": "心血管一区",//科室
                        "subject": null,
                        "value": 415,//人数
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   理论知识考试各项目平均成绩分析   需要返回数据如下
 */
let  theoryItemAvgScore = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "theoryItemAvgScore",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "分",
                "name": "理论知识考试各科目平均成绩分析",
                "data": [
                    {
                        "name": "0321-简答题测试-培训+考试",
                        "subject": null,
                        "value": 9,
                        "count": null,
                        "proportion": null,
                        "line": "10",
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   理论知识考试近五年平均成绩分析   需要返回数据如下
 */
let  theoryRecentAvgScore = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "theoryRecentAvgScore",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "分",
                "name": "理论知识考试近5年平均成绩",
                "data": [
                    {
                        "name": "2021",
                        "subject": null,
                        "value": 13.33,
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   理论知识考试各科系平均成绩   需要返回数据如下
 */
let  theoryDepartAvgScore = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "theoryDepartAvgScore",
        "confidence": 0.95,
        "parameters": {
            "value":{
                "unit": "分",
                "name": "理论知识考试各科系平均成绩",
                "data": [
                    {
                        "name": "心血管一区",
                        "subject": null,
                        "value": 9,
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   理论知识考试各科室平均成绩   需要返回数据如下
 * 可以语音识别“查询理论知识考试各科室平均成绩前4条”
 */
let  theoryWardAvgScore = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "theoryWardAvgScore",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "分",
                "name": "理论知识考试各科室平均成绩",
                "data": [
                    {
                        "name": "心血管一区",
                        "subject": "9",
                        "value": 9,
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   理论知识考试不及格人员科室分布   需要返回数据如下
 */
let  theoryNoPassWard = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "theoryNoPassWard",
        "confidence": 0.95,
        "parameters": {
            "value":{
                "unit": "人",
                "name": "理论知识考试不及格各科室人员分布",
                "data": [
                    {
                        "name": "内二科",
                        "subject": null,
                        "value": 3,
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   考试不合格人员层级分布   需要返回数据如下
 */
let  noPassEmpLevel = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "noPassEmpLevel",
        "confidence": 0.95,
        "parameters": {
            "value":{
                "unit": "人",
                "name": "考试不及格人员层级分布",
                "data": [
                    {
                        "name": "N1A",
                        "subject": null,
                        "value": 8,
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   考试不及格人员成绩分布   需要返回数据如下
 */
let  noPassScoreRange = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "noPassScoreRange",
        "confidence": 0.95,
        "parameters": {
            "value":{
                "unit": "人",
                "name": "考试不及格人员成绩分布",
                "data": [
                    {
                        "name": "0~9",
                        "subject": null,
                        "value": 13,
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   理论知识考试未参加人员科室分布   需要返回数据如下
 */
let  noJoinWard = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "noJoinWard",
        "confidence": 0.95,
        "parameters": {
            "value":{
                "unit": "人",
                "name": "理论知识考试未参加人员科室分布",
                "data": [
                    {
                        "name": "心血管一区",
                        "subject": null,
                        "value": 415,
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   理论知识考试错题统计   需要返回数据如下
 * 可以语音识别“查询理论知识考试错题统计前4条”
 */
let  errorQuestion = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "errorQuestion",
        "confidence": 0.95,
        "parameters": {
            "value": {
                "unit": "次",
                "name": "理论知识考试错题统计",
                "data": [
                    {
                        "name": "多选题:有关“人”的概念正确的是（）",
                        "subject": "TOP1",
                        "value": 11,
                        "count": null,
                        "proportion": null,
                        "line": null,
                        "answerCountList": []
                    }
                ],
                "value": null
            }
        }
    } ]
}
/**
 * 培训考试分析报告培训   考试结果   需要返回数据如下
 */
let  scoreResults = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "scoreResults",
        "confidence": 0.95,
        "parameters": {
            "value":[
                {
                    "empId": "7054",
                    "empCode": "7054",
                    "empName": "王**",
                    "empLevel": "N1A",
                    "quartersId": "05",
                    "quartersName": "责任护士",
                    "theory": "3.000",  // 理论考试成绩
                    "technology": "0.000",  //操作考试成绩
                    "wardCode": "312",
                    "wardName": "病理科"
                }
            ]
        }
    } ]
}
/**
 * 培训考试分析报告培训   存在问题   需要返回数据如下
 */
let  existQuestion = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "existQuestion",
        "confidence": 0.95,
        "parameters": {
            "value":"具体存在问题描述"
        }
    } ]
}
/**
 * 培训考试分析报告培训   评价分析   需要返回数据如下
 */
let  evaluationAnalysis = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "evaluationAnalysis",
        "confidence": 0.95,
        "parameters": {
            "value":"具体评价分析描述"
        }
    } ]
}
/**
 * 培训考试分析报告培训   改进措施   需要返回数据如下
 */
let  improvementMeasures = {
    "code": 200,
    "message": "操作成功",
    "data": [{
        "operation": "error",
        "target": "improvementMeasures",
        "confidence": 0.95,
        "parameters": {
            "value":"具体改进措施描述"
        }
    } ]
}