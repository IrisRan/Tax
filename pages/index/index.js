//index.js
//获取应用实例
const app = getApp()
/*
"equivalent"： 污染当量（大气污染物、水污染物）
"emissions": 排放量
固体废物直接按照每吨多少税收取
噪声按照分贝区间每月收取固定费用
*/
Page({
  data: {
    loadingState: "",
    cityArray: ['重庆市', '安徽省', '北京市', '福建省', '广东省', '甘肃省', '广西壮族自治区', '河北省', '黑龙江省', '河南省', '湖北省', '湖南省', '海南省', '江苏省', '江西省', '辽宁省', '内蒙古自治区', '宁夏回族自治区', '青海省', '上海市', '山西省', '山东省', '四川省', '陕西省', '天津市', '西藏自治区', '新疆维吾尔自治区', '云南省', '浙江省'],

    atmDrains: [1, 2],
    selectAtm: false, /*点击查看排放口的标志*/
    selectedAtm: 1,
    add: false, /*点击添加排放口的标志*/

    watDrains: [1, 2],
    selectWat: false, /*点击查看排放口的标志*/
    selectedWat: 1,

    atmosphere: [
      {
        "name": "二氧化硫",
        "equivalent": 0.95,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氮氧化物",
        "equivalent": 0.95,
        "place": "污染排放量(千克)"
      },
      {
        "name": "一氧化碳",
        "equivalent": 16.7,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氯气",
        "equivalent": 0.34,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氯化氢",
        "equivalent": 10.75,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氟化物",
        "equivalent": 0.87,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氰化氢",
        "equivalent": 0.005,
        "place": "污染排放量(千克)"
      },
      {
        "name": "硫酸雾",
        "equivalent": 0.6,
        "place": "污染排放量(千克)"
      },
      {
        "name": "铬酸雾",
        "equivalent": 0.0007,
        "place": "污染排放量(千克)"
      },
      {
        "name": "汞及其化合物",
        "equivalent": 0.0001,
        "place": "污染排放量(千克)"
      },
      {
        "name": "一般性粉尘",
        "equivalent": 4,
        "place": "污染排放量(千克)"
      },
      {
        "name": "石棉尘",
        "equivalent": 0.53,
        "place": "污染排放量(千克)"
      },
      {
        "name": "玻璃棉尘",
        "equivalent": 2.13,
        "place": "污染排放量(千克)"
      },
      {
        "name": "炭黑尘",
        "equivalent": 0.59,
        "place": "污染排放量(千克)"
      },
      {
        "name": "铅及其化合物",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "镉及其化合物",
        "equivalent": 0.03,
        "place": "污染排放量(千克)"
      },
      {
        "name": "铍及其化合物",
        "equivalent": 0.0004,
        "place": "污染排放量(千克)"
      },
      {
        "name": "镍及其化合物",
        "equivalent": 0.13,
        "place": "污染排放量(千克)"
      },
      {
        "name": "锡及其化合物",
        "equivalent": 0.27,
        "place": "污染排放量(千克)"
      },
      {
        "name": "烟尘",
        "equivalent": 2.18,
        "place": "污染排放量(千克)"
      },
      {
        "name": "苯",
        "equivalent": 0.05,
        "place": "污染排放量(千克)"
      },
      {
        "name": "甲苯",
        "equivalent": 0.18,
        "place": "污染排放量(千克)"
      },
      {
        "name": "二甲苯",
        "equivalent": 0.27,
        "place": "污染排放量(千克)"
      },
      {
        "name": "苯并(a)芘",
        "equivalent": 0.000002,
        "place": "污染排放量(千克)"
      },
      {
        "name": "甲醛",
        "equivalent": 0.09,
        "place": "污染排放量(千克)"
      },
      {
        "name": "乙醛",
        "equivalent": 0.45,
        "place": "污染排放量(千克)"
      },
      {
        "name": "丙烯醛",
        "equivalent": 0.06,
        "place": "污染排放量(千克)"
      },
      {
        "name": "甲醇",
        "equivalent": 0.67,
        "place": "污染排放量(千克)"
      },
      {
        "name": "酚类",
        "equivalent": 0.35,
        "place": "污染排放量(千克)"
      },
      {
        "name": "沥青烟",
        "equivalent": 0.19,
        "place": "污染排放量(千克)"
      },
      {
        "name": "苯胺类",
        "equivalent": 0.21,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氯苯类",
        "equivalent": 0.72,
        "place": "污染排放量(千克)"
      },
      {
        "name": "硝基苯",
        "equivalent": 0.17,
        "place": "污染排放量(千克)"
      },
      {
        "name": "丙烯腈",
        "equivalent": 0.22,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氯乙烯",
        "equivalent": 0.55,
        "place": "污染排放量(千克)"
      },
      {
        "name": "光气",
        "equivalent": 0.04,
        "place": "污染排放量(千克)"
      },
      {
        "name": "硫化氢",
        "equivalent": 0.29,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氨",
        "equivalent": 9.09,
        "place": "污染排放量(千克)"
      },
      {
        "name": "三甲胺",
        "equivalent": 0.32,
        "place": "污染排放量(千克)"
      },
      {
        "name": "甲硫醇",
        "equivalent": 0.04,
        "place": "污染排放量(千克)"
      },
      {
        "name": "甲硫醚",
        "equivalent": 0.28,
        "place": "污染排放量(千克)"
      },
      {
        "name": "二甲二硫",
        "equivalent": 0.28,
        "place": "污染排放量(千克)"
      },
      {
        "name": "苯乙烯",
        "equivalent": 25,
        "place": "污染排放量(千克)"
      },
      {
        "name": "二硫化碳",
        "equivalent": 20,
        "place": "污染排放量(千克)"
      }
    ],

    water: [
      {
        "name": "总汞",
        "equivalent": 0.0005,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总镉",
        "equivalent": 0.005,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总铬",
        "equivalent": 0.04,
        "place": "污染排放量(千克)"
      },
      {
        "name": "六价铬",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总砷",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总铅",
        "equivalent": 0.025,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总镍",
        "equivalent": 0.025,
        "place": "污染排放量(千克)"
      },
      {
        "name": "苯并(a)芘",
        "equivalent": 0.0000003,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总铍",
        "equivalent": 0.01,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总银",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "悬浮物(SS)",
        "equivalent": 4,
        "place": "污染排放量(千克)"
      },
      {
        "name": "生化需氧量(BOD5)",
        "equivalent": 0.5,
        "place": "污染排放量(千克)"
      },
      {
        "name": "化学需氧量(CODcr)",
        "equivalent": 1,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总有机碳(TOC)",
        "equivalent": 0.49,
        "place": "污染排放量(千克)"
      },
      {
        "name": "石油类",
        "equivalent": 0.1,
        "place": "污染排放量(千克)"
      },
      {
        "name": "动植物油",
        "equivalent": 0.16,
        "place": "污染排放量(千克)"
      },
      {
        "name": "挥发酚",
        "equivalent": 0.08,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总氰化物",
        "equivalent": 0.05,
        "place": "污染排放量(千克)"
      },
      {
        "name": "硫化物",
        "equivalent": 0.125,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氨氮",
        "equivalent": 0.8,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氟化物",
        "equivalent": 0.5,
        "place": "污染排放量(千克)"
      },
      {
        "name": "甲醛",
        "equivalent": 0.125,
        "place": "污染排放量(千克)"
      },
      {
        "name": "苯胺类",
        "equivalent": 0.2,
        "place": "污染排放量(千克)"
      },
      {
        "name": "硝基苯类",
        "equivalent": 0.2,
        "place": "污染排放量(千克)"
      },
      {
        "name": "阴离子表面活性剂(LAS)",
        "equivalent": 0.2,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总铜",
        "equivalent": 0.1,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总锌",
        "equivalent": 0.2,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总锰",
        "equivalent": 0.2,
        "place": "污染排放量(千克)"
      },
      {
        "name": "彩色显影剂(CD-2)",
        "equivalent": 0.2,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总磷",
        "equivalent": 0.25,
        "place": "污染排放量(千克)"
      },
      {
        "name": "单质磷(以P计)",
        "equivalent": 0.05,
        "place": "污染排放量(千克)"
      },
      {
        "name": "有机磷农药(以P计)",
        "equivalent": 0.05,
        "place": "污染排放量(千克)"
      },
      {
        "name": "乐果",
        "equivalent": 0.05,
        "place": "污染排放量(千克)"
      },
      {
        "name": "甲基对硫磷",
        "equivalent": 0.05,
        "place": "污染排放量(千克)"
      },
      {
        "name": "马拉硫磷",
        "equivalent": 0.05,
        "place": "污染排放量(千克)"
      },
      {
        "name": "对硫磷",
        "equivalent": 0.05,
        "place": "污染排放量(千克)"
      },
      {
        "name": "五氯酚及五氯酚钠(以五氯酚计)",
        "equivalent": 0.25,
        "place": "污染排放量(千克)"
      },
      {
        "name": "三氯甲烷",
        "equivalent": 0.04,
        "place": "污染排放量(千克)"
      },
      {
        "name": "可吸附有机卤化物(AOX)(以CI计)",
        "equivalent": 0.25,
        "place": "污染排放量(千克)"
      },
      {
        "name": "四氯化碳",
        "equivalent": 0.04,
        "place": "污染排放量(千克)"
      },
      {
        "name": "三氯乙烯",
        "equivalent": 0.04,
        "place": "污染排放量(千克)"
      },
      {
        "name": "四氯乙烯",
        "equivalent": 0.04,
        "place": "污染排放量(千克)"
      },
      {
        "name": "苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "甲苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "乙苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "邻-二甲苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "对-二甲苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "间-二甲苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "氯苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "邻二氯苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "对二氯苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "对硝基氯苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "2,4-二硝基氯苯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "苯酚",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "间-甲酚",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "2,4-二氯酚",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "2,4,6-三氯酚",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "邻苯二甲酸二丁酯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "邻苯二甲酸二辛酯",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "丙烯腈",
        "equivalent": 0.125,
        "place": "污染排放量(千克)"
      },
      {
        "name": "总硒",
        "equivalent": 0.02,
        "place": "污染排放量(千克)"
      },
      {
        "name": "PH值0-1,13-14",
        "equivalent": 0.06,
        "place": "污染排放量(吨污水)"
      },
      {
        "name": "PH值1-2,12-13",
        "equivalent": 0.125,
        "place": "污染排放量(吨污水)"
      },
      {
        "name": "PH值2-3,11-12",
        "equivalent": 0.25,
        "place": "污染排放量(吨污水)"
      },
      {
        "name": "PH值3-4,10-11",
        "equivalent": 0.5,
        "place": "污染排放量(吨污水)",
      },
      {
        "name": "PH值4-5,9-10",
        "equivalent": 1,
        "place": "污染排放量(吨污水)",
      },
      {
        "name": "PH值5-6",
        "equivalent": 5,
        "place": "污染排放量(吨污水)",
      },
      {
        "name": "色度",
        "equivalent": 5,
        "place": "污染排放量(吨水·倍)",
      },
      {
        "name": "大肠杆菌数(超标)",
        "equivalent": 3.3,
        "place": "污染排放量(吨污水)",
      },
      {
        "name": "余氯量(用氯消毒的医院废水)",
        "equivalent": 3.3,
        "place": "污染排放量(吨污水)",
      },
    ],
    
    menu: [
      {
        "name": "大气污染物",
        "id": 1,
        "items": [
          {
            "stepId": 1,
            "stepItems": [
              {
                "name": "二氧化硫",
                "equivalent": 0.95,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氮氧化物",
                "equivalent": 0.95,
                "place": "污染排放量(千克)"
              },
              {
                "name": "一氧化碳",
                "equivalent": 16.7,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氯气",
                "equivalent": 0.34,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氯化氢",
                "equivalent": 10.75,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氟化物",
                "equivalent": 0.87,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氰化氢",
                "equivalent": 0.005,
                "place": "污染排放量(千克)"
              },
              {
                "name": "硫酸雾",
                "equivalent": 0.6,
                "place": "污染排放量(千克)"
              },
              {
                "name": "铬酸雾",
                "equivalent": 0.0007,
                "place": "污染排放量(千克)"
              },
              {
                "name": "汞及其化合物",
                "equivalent": 0.0001,
                "place": "污染排放量(千克)"
              },
              {
                "name": "一般性粉尘",
                "equivalent": 4,
                "place": "污染排放量(千克)"
              },
              {
                "name": "石棉尘",
                "equivalent": 0.53,
                "place": "污染排放量(千克)"
              },
              {
                "name": "玻璃棉尘",
                "equivalent": 2.13,
                "place": "污染排放量(千克)"
              },
              {
                "name": "炭黑尘",
                "equivalent": 0.59,
                "place": "污染排放量(千克)"
              },
              {
                "name": "铅及其化合物",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "镉及其化合物",
                "equivalent": 0.03,
                "place": "污染排放量(千克)"
              },
              {
                "name": "铍及其化合物",
                "equivalent": 0.0004,
                "place": "污染排放量(千克)"
              },
              {
                "name": "镍及其化合物",
                "equivalent": 0.13,
                "place": "污染排放量(千克)"
              },
              {
                "name": "锡及其化合物",
                "equivalent": 0.27,
                "place": "污染排放量(千克)"
              },
              {
                "name": "烟尘",
                "equivalent": 2.18,
                "place": "污染排放量(千克)"
              },
              {
                "name": "苯",
                "equivalent": 0.05,
                "place": "污染排放量(千克)"
              },
              {
                "name": "甲苯",
                "equivalent": 0.18,
                "place": "污染排放量(千克)"
              },
              {
                "name": "二甲苯",
                "equivalent": 0.27,
                "place": "污染排放量(千克)"
              },
              {
                "name": "苯并(a)芘",
                "equivalent": 0.000002,
                "place": "污染排放量(千克)"
              },
              {
                "name": "甲醛",
                "equivalent": 0.09,
                "place": "污染排放量(千克)"
              },
              {
                "name": "乙醛",
                "equivalent": 0.45,
                "place": "污染排放量(千克)"
              },
              {
                "name": "丙烯醛",
                "equivalent": 0.06,
                "place": "污染排放量(千克)"
              },
              {
                "name": "甲醇",
                "equivalent": 0.67,
                "place": "污染排放量(千克)"
              },
              {
                "name": "酚类",
                "equivalent": 0.35,
                "place": "污染排放量(千克)"
              },
              {
                "name": "沥青烟",
                "equivalent": 0.19,
                "place": "污染排放量(千克)"
              },
              {
                "name": "苯胺类",
                "equivalent": 0.21,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氯苯类",
                "equivalent": 0.72,
                "place": "污染排放量(千克)"
              },
              {
                "name": "硝基苯",
                "equivalent": 0.17,
                "place": "污染排放量(千克)"
              },
              {
                "name": "丙烯腈",
                "equivalent": 0.22,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氯乙烯",
                "equivalent": 0.55,
                "place": "污染排放量(千克)"
              },
              {
                "name": "光气",
                "equivalent": 0.04,
                "place": "污染排放量(千克)"
              },
              {
                "name": "硫化氢",
                "equivalent": 0.29,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氨",
                "equivalent": 9.09,
                "place": "污染排放量(千克)"
              },
              {
                "name": "三甲胺",
                "equivalent": 0.32,
                "place": "污染排放量(千克)"
              },
              {
                "name": "甲硫醇",
                "equivalent": 0.04,
                "place": "污染排放量(千克)"
              },
              {
                "name": "甲硫醚",
                "equivalent": 0.28,
                "place": "污染排放量(千克)"
              },
              {
                "name": "二甲二硫",
                "equivalent": 0.28,
                "place": "污染排放量(千克)"
              },
              {
                "name": "苯乙烯",
                "equivalent": 25,
                "place": "污染排放量(千克)"
              },
              {
                "name": "二硫化碳",
                "equivalent": 20,
                "place": "污染排放量(千克)"
              }
            ],

          }
        ]
      },
      {
        "name": "水污染物",
        "id": 2,
        "items": [
          {
            "stepId": 1,
            "stepItems": [
              {
                "name": "总汞",
                "equivalent": 0.0005,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总镉",
                "equivalent": 0.005,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总铬",
                "equivalent": 0.04,
                "place": "污染排放量(千克)"
              },
              {
                "name": "六价铬",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总砷",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总铅",
                "equivalent": 0.025,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总镍",
                "equivalent": 0.025,
                "place": "污染排放量(千克)"
              },
              {
                "name": "苯并(a)芘",
                "equivalent": 0.0000003,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总铍",
                "equivalent": 0.01,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总银",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "悬浮物(SS)",
                "equivalent": 4,
                "place": "污染排放量(千克)"
              },
              {
                "name": "生化需氧量(BOD5)",
                "equivalent": 0.5,
                "place": "污染排放量(千克)"
              },
              {
                "name": "化学需氧量(CODcr)",
                "equivalent": 1,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总有机碳(TOC)",
                "equivalent": 0.49,
                "place": "污染排放量(千克)"
              },
              {
                "name": "石油类",
                "equivalent": 0.1,
                "place": "污染排放量(千克)"
              },
              {
                "name": "动植物油",
                "equivalent": 0.16,
                "place": "污染排放量(千克)"
              },
              {
                "name": "挥发酚",
                "equivalent": 0.08,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总氰化物",
                "equivalent": 0.05,
                "place": "污染排放量(千克)"
              },
              {
                "name": "硫化物",
                "equivalent": 0.125,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氨氮",
                "equivalent": 0.8,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氟化物",
                "equivalent": 0.5,
                "place": "污染排放量(千克)"
              },
              {
                "name": "甲醛",
                "equivalent": 0.125,
                "place": "污染排放量(千克)"
              },
              {
                "name": "苯胺类",
                "equivalent": 0.2,
                "place": "污染排放量(千克)"
              },
              {
                "name": "硝基苯类",
                "equivalent": 0.2,
                "place": "污染排放量(千克)"
              },
              {
                "name": "阴离子表面活性剂(LAS)",
                "equivalent": 0.2,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总铜",
                "equivalent": 0.1,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总锌",
                "equivalent": 0.2,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总锰",
                "equivalent": 0.2,
                "place": "污染排放量(千克)"
              },
              {
                "name": "彩色显影剂(CD-2)",
                "equivalent": 0.2,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总磷",
                "equivalent": 0.25,
                "place": "污染排放量(千克)"
              },
              {
                "name": "单质磷(以P计)",
                "equivalent": 0.05,
                "place": "污染排放量(千克)"
              },
              {
                "name": "有机磷农药(以P计)",
                "equivalent": 0.05,
                "place": "污染排放量(千克)"
              },
              {
                "name": "乐果",
                "equivalent": 0.05,
                "place": "污染排放量(千克)"
              },
              {
                "name": "甲基对硫磷",
                "equivalent": 0.05,
                "place": "污染排放量(千克)"
              },
              {
                "name": "马拉硫磷",
                "equivalent": 0.05,
                "place": "污染排放量(千克)"
              },
              {
                "name": "对硫磷",
                "equivalent": 0.05,
                "place": "污染排放量(千克)"
              },
              {
                "name": "五氯酚及五氯酚钠(以五氯酚计)",
                "equivalent": 0.25,
                "place": "污染排放量(千克)"
              },
              {
                "name": "三氯甲烷",
                "equivalent": 0.04,
                "place": "污染排放量(千克)"
              },
              {
                "name": "可吸附有机卤化物(AOX)(以CI计)",
                "equivalent": 0.25,
                "place": "污染排放量(千克)"
              },
              {
                "name": "四氯化碳",
                "equivalent": 0.04,
                "place": "污染排放量(千克)"
              },
              {
                "name": "三氯乙烯",
                "equivalent": 0.04,
                "place": "污染排放量(千克)"
              },
              {
                "name": "四氯乙烯",
                "equivalent": 0.04,
                "place": "污染排放量(千克)"
              },
              {
                "name": "苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "甲苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "乙苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "邻-二甲苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "对-二甲苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "间-二甲苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "氯苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "邻二氯苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "对二氯苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "对硝基氯苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "2,4-二硝基氯苯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "苯酚",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "间-甲酚",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "2,4-二氯酚",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "2,4,6-三氯酚",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "邻苯二甲酸二丁酯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "邻苯二甲酸二辛酯",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "丙烯腈",
                "equivalent": 0.125,
                "place": "污染排放量(千克)"
              },
              {
                "name": "总硒",
                "equivalent": 0.02,
                "place": "污染排放量(千克)"
              },
              {
                "name": "PH值0-1,13-14",
                "equivalent": 0.06,
                "place": "污染排放量(吨污水)"
              },
              {
                "name": "PH值1-2,12-13",
                "equivalent": 0.125,
                "place": "污染排放量(吨污水)"
              },
              {
                "name": "PH值2-3,11-12",
                "equivalent": 0.25,
                "place": "污染排放量(吨污水)"
              },
              {
                "name": "PH值3-4,10-11",
                "equivalent": 0.5,
                "place": "污染排放量(吨污水)",
              },
              {
                "name": "PH值4-5,9-10",
                "equivalent": 1,
                "place": "污染排放量(吨污水)",
              },
              {
                "name": "PH值5-6",
                "equivalent": 5,
                "place": "污染排放量(吨污水)",
              },
              {
                "name": "色度",
                "equivalent": 5,
                "place": "污染排放量(吨水·倍)",
              },
              {
                "name": "大肠杆菌数(超标)",
                "equivalent": 3.3,
                "place": "污染排放量(吨污水)",
              },
              {
                "name": "余氯量(用氯消毒的医院废水)",
                "equivalent": 3.3,
                "place": "污染排放量(吨污水)",
              },
            ],
            
          }
        ]
      },
      {
        "name": "固体污染物",
        "items": [
          {
            "stepId": 1,
            "stepItems": [
              {
                "name": "煤矸石",
                "equivalent": 1,
                "place": "污染排放量(吨)",
              },
              {
                "name": "尾矿",
                "equivalent": 1,
                "place": "污染排放量(吨)",
              },
              {
                "name": "危险废物",
                "equivalent": 1,
                "place": "污染排放量(吨)",
              },
              {
                "name": "冶炼渣、粉煤灰、炉渣、其他固体废物(含半固态、液态废物)",
                "equivalent": 1,
                "place": "污染排放量(吨)",
              }
            ]
          }
        ]
      },
      {
        "name": "噪声污染物",
        "items": [
          {
            "stepId": 1,
            "stepItems": [
              {
                "name": "超标1-3分贝",
                "equivalent": 1,
                "place": "噪声超标点(个)",
              },
              {
                "name": "超标4-6分贝",
                "equivalent": 1,
                "place": "噪声超标点(个)",
              },
              {
                "name": "超标7-9分贝",
                "equivalent": 1,
                "place": "噪声超标点(个)",
              },
              {
                "name": "超标10-12分贝",
                "equivalent": 1,
                "place": "噪声超标点(个)",
              },
              {
                "name": "超标13-15分贝",
                "equivalent": 1,
                "place": "噪声超标点(个)",
              },
              {
                "name": "超标16分贝以上",
                "equivalent": 1,
                "place": "噪声超标点(个)"
              }
            ]
          },
          
        ]
      }
    ],

/****
    menu: [
      {
        "name": "大气污染物",
        "id": 1,
        "items": [
          {
            "name": "二氧化硫",
            "equivalent": 0.95,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氮氧化物",
            "equivalent": 0.95,
            "place": "污染排放量(千克)"
          },
          {
            "name": "一氧化碳",
            "equivalent": 16.7,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氯气",
            "equivalent": 0.34,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氯化氢",
            "equivalent": 10.75,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氟化物",
            "equivalent": 0.87,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氰化氢",
            "equivalent": 0.005,
            "place": "污染排放量(千克)"
          },
          {
            "name": "硫酸雾",
            "equivalent": 0.6,
            "place": "污染排放量(千克)"
          },
          {
            "name": "铬酸雾",
            "equivalent": 0.0007,
            "place": "污染排放量(千克)"
          },
          {
            "name": "汞及其化合物",
            "equivalent": 0.0001,
            "place": "污染排放量(千克)"
          },
          {
            "name": "一般性粉尘",
            "equivalent": 4,
            "place": "污染排放量(千克)"
          },
          {
            "name": "石棉尘",
            "equivalent": 0.53,
            "place": "污染排放量(千克)"
          },
          {
            "name": "玻璃棉尘",
            "equivalent": 2.13,
            "place": "污染排放量(千克)"
          },
          {
            "name": "炭黑尘",
            "equivalent": 0.59,
            "place": "污染排放量(千克)"
          },
          {
            "name": "铅及其化合物",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "镉及其化合物",
            "equivalent": 0.03,
            "place": "污染排放量(千克)"
          },
          {
            "name": "铍及其化合物",
            "equivalent": 0.0004,
            "place": "污染排放量(千克)"
          },
          {
            "name": "镍及其化合物",
            "equivalent": 0.13,
            "place": "污染排放量(千克)"
          },
          {
            "name": "锡及其化合物",
            "equivalent": 0.27,
            "place": "污染排放量(千克)"
          },
          {
            "name": "烟尘",
            "equivalent": 2.18,
            "place": "污染排放量(千克)"
          },
          {
            "name": "苯",
            "equivalent": 0.05,
            "place": "污染排放量(千克)"
          },
          {
            "name": "甲苯",
            "equivalent": 0.18,
            "place": "污染排放量(千克)"
          },
          {
            "name": "二甲苯",
            "equivalent": 0.27,
            "place": "污染排放量(千克)"
          },
          {
            "name": "苯并(a)芘",
            "equivalent": 0.000002,
            "place": "污染排放量(千克)"
          },
          {
            "name": "甲醛",
            "equivalent": 0.09,
            "place": "污染排放量(千克)"
          },
          {
            "name": "乙醛",
            "equivalent": 0.45,
            "place": "污染排放量(千克)"
          },
          {
            "name": "丙烯醛",
            "equivalent": 0.06,
            "place": "污染排放量(千克)"
          },
          {
            "name": "甲醇",
            "equivalent": 0.67,
            "place": "污染排放量(千克)"
          },
          {
            "name": "酚类",
            "equivalent": 0.35,
            "place": "污染排放量(千克)"
          },
          {
            "name": "沥青烟",
            "equivalent": 0.19,
            "place": "污染排放量(千克)"
          },
          {
            "name": "苯胺类",
            "equivalent": 0.21,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氯苯类",
            "equivalent": 0.72,
            "place": "污染排放量(千克)"
          },
          {
            "name": "硝基苯",
            "equivalent": 0.17,
            "place": "污染排放量(千克)"
          },
          {
            "name": "丙烯腈",
            "equivalent": 0.22,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氯乙烯",
            "equivalent": 0.55,
            "place": "污染排放量(千克)"
          },
          {
            "name": "光气",
            "equivalent": 0.04,
            "place": "污染排放量(千克)"
          },
          {
            "name": "硫化氢",
            "equivalent": 0.29,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氨",
            "equivalent": 9.09,
            "place": "污染排放量(千克)"
          },
          {
            "name": "三甲胺",
            "equivalent": 0.32,
            "place": "污染排放量(千克)"
          },
          {
            "name": "甲硫醇",
            "equivalent": 0.04,
            "place": "污染排放量(千克)"
          },
          {
            "name": "甲硫醚",
            "equivalent": 0.28,
            "place": "污染排放量(千克)"
          },
          {
            "name": "二甲二硫",
            "equivalent": 0.28,
            "place": "污染排放量(千克)"
          },
          {
            "name": "苯乙烯",
            "equivalent": 25,
            "place": "污染排放量(千克)"
          },
          {
            "name": "二硫化碳",
            "equivalent": 20,
            "place": "污染排放量(千克)"
          }
        ]
      },
      {
        "name": "水污染物",
        "id": 1,
        "items": [
          {
            "name": "总汞",
            "equivalent": 0.0005,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总镉",
            "equivalent": 0.005,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总铬",
            "equivalent": 0.04,
            "place": "污染排放量(千克)"
          },
          {
            "name": "六价铬",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总砷",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总铅",
            "equivalent": 0.025,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总镍",
            "equivalent": 0.025,
            "place": "污染排放量(千克)"
          },
          {
            "name": "苯并(a)芘",
            "equivalent": 0.0000003,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总铍",
            "equivalent": 0.01,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总银",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "悬浮物(SS)",
            "equivalent": 4,
            "place": "污染排放量(千克)"
          },
          {
            "name": "生化需氧量(BOD5)",
            "equivalent": 0.5,
            "place": "污染排放量(千克)"
          },
          {
            "name": "化学需氧量(CODcr)",
            "equivalent": 1,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总有机碳(TOC)",
            "equivalent": 0.49,
            "place": "污染排放量(千克)"
          },
          {
            "name": "石油类",
            "equivalent": 0.1,
            "place": "污染排放量(千克)"
          },
          {
            "name": "动植物油",
            "equivalent": 0.16,
            "place": "污染排放量(千克)"
          },
          {
            "name": "挥发酚",
            "equivalent": 0.08,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总氰化物",
            "equivalent": 0.05,
            "place": "污染排放量(千克)"
          },
          {
            "name": "硫化物",
            "equivalent": 0.125,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氨氮",
            "equivalent": 0.8,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氟化物",
            "equivalent": 0.5,
            "place": "污染排放量(千克)"
          },
          {
            "name": "甲醛",
            "equivalent": 0.125,
            "place": "污染排放量(千克)"
          },
          {
            "name": "苯胺类",
            "equivalent": 0.2,
            "place": "污染排放量(千克)"
          },
          {
            "name": "硝基苯类",
            "equivalent": 0.2,
            "place": "污染排放量(千克)"
          },
          {
            "name": "阴离子表面活性剂(LAS)",
            "equivalent": 0.2,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总铜",
            "equivalent": 0.1,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总锌",
            "equivalent": 0.2,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总锰",
            "equivalent": 0.2,
            "place": "污染排放量(千克)"
          },
          {
            "name": "彩色显影剂(CD-2)",
            "equivalent": 0.2,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总磷",
            "equivalent": 0.25,
            "place": "污染排放量(千克)"
          },
          {
            "name": "单质磷(以P计)",
            "equivalent": 0.05,
            "place": "污染排放量(千克)"
          },
          {
            "name": "有机磷农药(以P计)",
            "equivalent": 0.05,
            "place": "污染排放量(千克)"
          },
          {
            "name": "乐果",
            "equivalent": 0.05,
            "place": "污染排放量(千克)"
          },
          {
            "name": "甲基对硫磷",
            "equivalent": 0.05,
            "place": "污染排放量(千克)"
          },
          {
            "name": "马拉硫磷",
            "equivalent": 0.05,
            "place": "污染排放量(千克)"
          },
          {
            "name": "对硫磷",
            "equivalent": 0.05,
            "place": "污染排放量(千克)"
          },
          {
            "name": "五氯酚及五氯酚钠(以五氯酚计)",
            "equivalent": 0.25,
            "place": "污染排放量(千克)"
          },
          {
            "name": "三氯甲烷",
            "equivalent": 0.04,
            "place": "污染排放量(千克)"
          },
          {
            "name": "可吸附有机卤化物(AOX)(以CI计)",
            "equivalent": 0.25,
            "place": "污染排放量(千克)"
          },
          {
            "name": "四氯化碳",
            "equivalent": 0.04,
            "place": "污染排放量(千克)"
          },
          {
            "name": "三氯乙烯",
            "equivalent": 0.04,
            "place": "污染排放量(千克)"
          },
          {
            "name": "四氯乙烯",
            "equivalent": 0.04,
            "place": "污染排放量(千克)"
          },
          {
            "name": "苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "甲苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "乙苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "邻-二甲苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "对-二甲苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "间-二甲苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "氯苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "邻二氯苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "对二氯苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "对硝基氯苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "2,4-二硝基氯苯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "苯酚",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "间-甲酚",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "2,4-二氯酚",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "2,4,6-三氯酚",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "邻苯二甲酸二丁酯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "邻苯二甲酸二辛酯",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "丙烯腈",
            "equivalent": 0.125,
            "place": "污染排放量(千克)"
          },
          {
            "name": "总硒",
            "equivalent": 0.02,
            "place": "污染排放量(千克)"
          },
          {
            "name": "PH值0-1,13-14",
            "equivalent": 0.06,
            "place": "污染排放量(吨污水)"
          },
          {
            "name": "PH值1-2,12-13",
            "equivalent": 0.125,
            "place": "污染排放量(吨污水)"
          },
          {
            "name": "PH值2-3,11-12",
            "equivalent": 0.25,
            "place": "污染排放量(吨污水)"
          },
          {
            "name": "PH值3-4,10-11",
            "equivalent": 0.5,
            "place": "污染排放量(吨污水)",
          },
          {
            "name": "PH值4-5,9-10",
            "equivalent": 1,
            "place": "污染排放量(吨污水)",
          },
          {
            "name": "PH值5-6",
            "equivalent": 5,
            "place": "污染排放量(吨污水)",
          },
          {
            "name": "色度",
            "equivalent": 5,
            "place": "污染排放量(吨水·倍)",
          },
          {
            "name": "大肠杆菌数(超标)",
            "equivalent": 3.3,
            "place": "污染排放量(吨污水)",
          },
          {
            "name": "余氯量(用氯消毒的医院废水)",
            "equivalent": 3.3,
            "place": "污染排放量(吨污水)",
          },
        ]
      },
      {
        "name": "固体污染物",
        "items": [
          {
            "name": "煤矸石",
            "equivalent": 1,
            "place": "污染排放量(吨)",
          },
          {
            "name": "尾矿",
            "equivalent": 1,
            "place": "污染排放量(吨)",
          },
          {
            "name": "危险废物",
            "equivalent": 1,
            "place": "污染排放量(吨)",
          },
          {
            "name": "冶炼渣、粉煤灰、炉渣、其他固体废物(含半固态、液态废物)",
            "equivalent": 1,
            "place": "污染排放量(吨)",
          }
        ]
      },
      {
        "name": "噪声污染物",
        "items": [
          {
            "name": "超标1-3分贝",
            "equivalent": 1,
            "place": "噪声超标点(个)",
          },
          {
            "name": "超标4-6分贝",
            "equivalent": 1,
            "place": "噪声超标点(个)",
          },
          {
            "name": "超标7-9分贝",
            "equivalent": 1,
            "place": "噪声超标点(个)",
          },
          {
            "name": "超标10-12分贝",
            "equivalent": 1,
            "place": "噪声超标点(个)",
          },
          {
            "name": "超标13-15分贝",
            "equivalent": 1,
            "place": "噪声超标点(个)",
          },
          {
            "name": "超标16分贝以上",
            "equivalent": 1,
            "place": "噪声超标点(个)"
          }
        ]
      }
    ], 
    *******/
    taxArray: [], /*需要计算的数据*/
    toView: '',
    status: 0,
    cityIndex: 0,
    count: 0, /*填过的总项数*/
    atmosphereUnit: 2.4, /*大气每污染当量的收费*/
    waterUnit: 3,
    atmosphereIndex: 0
  },
  
  /*选择城市*/
  cityselect: function (e) {
    this.setData({
      cityIndex: e.detail.value
    })
  },

  /*弹出框，环保税政策*/
  policy: function () {
    wx.showModal({
      title: '环保税征收细则',
      content: '噪声污染计数规则 \r\n 1、一个单位边界上有多处噪声超标，根据最高一处超标超标声级计算应纳税额；当延边界长度超过100米有两处以上噪声超标，按照两个单位计算应税额；\r\n 2、一个单位有不同地点作业场所的，应当分别计算应纳税额，合并计征。\r\n 3、昼、夜均超标的环境噪声，昼、夜分别计算应纳税额，累计计征。\r\n 4、声源一个月内超标不足15天的，减半计算应纳税额。\r\n 5、夜间频繁突发和夜间偶然突发厂界超标噪声，按等效声级和峰值噪声两种指标中超标分贝值高的一项计算应纳税额。\r\n 6、计算结果为噪声超标一个月所应缴纳税额，计算结果乘以实际超标月数，即为最终缴纳税额。',
      confirmColor: '#99CC33'
    })
  },

  /*选择目录*/
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'menu' + index.toString()
    })
    console.log(this.data.toView);
  },

  /* 点击下拉框 */
  bindShowAtm(e) {
    var parentIndex = e.currentTarget.dataset.index
    
    this.setData({
      selectAtm: !this.data.selectAtm
    })
    selectAtm: false
    console.log(parentIndex)
  },

  bindShowWat(e) {
    var parentIndex = e.currentTarget.dataset.index

    this.setData({
      selectWat: !this.data.selectWat
    })
    console.log(this.data.selectWat)
    console.log(parentIndex)
  },
  
/* 已选下拉框 */
  selectAtmDrain(e) {
    var parentIndex = e.currentTarget.dataset.index /*父坐标*/
    var popId = e.currentTarget.dataset.id /*排污口*/
    var allArray = this.data.taxArray
    var array /*该污染物排污口对应的输入数据*/
    var temp
    this.setData({
      selectedAtm: popId,
      selectAtm: false
    })
    /*获得当前数据*/
    console.log("??" + allArray)
    for (temp = 0; temp < allArray.length; temp++) {
      if (this.data.taxArray[temp].popId == popId && allArray[temp].parentIndex == parentIndex) {
        array.push(allArray[temp] )
      }
    }
    /*将当前数据set到input框里*/
    for (temp = 0; temp < array.length; temp++) {
      menu[parentIndex][allArray[temp].childIndex].value = array[temp].emission
    }
  },

  /*增加排放口*/
  addDrain: function (e) {
    var parentIndex = e.currentTarget.dataset.index /*父坐标*/
    var lastIndex = this.data.drains.length
    var lastDrain = this.data.drains[lastIndex - 1]
    if (parentIndex == 0) {
      wx.showModal({
        title: '增加一个新的污染排放口',
        content: '确定增加一个新的大气污染排放口吗？',
        confirmColor: '#99CC33',
        success: function(res) {
          if(res.confirm) {
            this.data.drains.push(lastDrain + 1)
          }
        }
      })
    } else if (parentIndex == 1) {
      wx.showModal({
        title: '增加一个新的污染排放口',
        content: '确定增加一个新的水污染排放口吗？',
        confirmColor: '#99CC33',
        success: function (res) {
          if (res.confirm) {
            this.data.drains.push(lastDrain + 1)
          }
        }
      })
    }
    console.log("lastDrain:" + lastDrain)
    console.log("parentIndex:" + parentIndex)
    console.log(this.data.drains[lastIndex])
  },
  
  /*获取输入数字并将其赋值到相应对象*/
  getInput: function (e) {
    var parentIndex = e.currentTarget.dataset.index /*父坐标*/
    var childIndex = e.currentTarget.dataset.itemIndex /*子坐标*/
    var popId = this.data.selectedAtm /*当前选择的排放口*/
    var emission = e.detail.value /*排放量*/
    var equivalent = this.data.menu[parentIndex].items[childIndex].equivalent /*将污染当量取出 */
    var activeCount = 0
    var temp
    
    if (!e.detail.value) {
      for (temp = 0; temp < this.data.taxArray.length; temp++) {
        if (this.data.taxArray[temp].popId == popId && this.data.taxArray[temp].parentIndex == parentIndex && this.data.taxArray[temp].childIndex == childIndex) { /*删除原来的输入*/
          this.data.taxArray.splice(temp, 1)
        }  /*否则在新的输入框无改动*/
      }
    } else {
      for (temp = 0; temp < this.data.taxArray.length; temp++) {
        if (this.data.taxArray[temp].parentIndex == parentIndex && this.data.taxArray[temp].childIndex == childIndex) { /*修改原来的输入*/
          this.data.taxArray.splice(temp, 1)
        }
      }
      this.data.taxArray.push({ popId, parentIndex, childIndex, equivalent, emission })
    } 

    activeCount = this.data.taxArray.length
    
    this.setData({
      count: activeCount
    })
    console.log(this.data.taxArray)
    console.log(this.data.count)
  },

  /*计算税款*/
  getTax: function (e) {
    var atmosphereUnit = parseFloat(this.data.atmosphereUnit)
    var waterUnit = parseFloat(this.data.waterUnit)
    var atmosphereTax = 0
    var waterTax = 0
    var solidTax = 0
    var noiseTax = 0
    var allTax = 0
    var array = this.data.taxArray
    var count = this.data.count

    var i /*emission: 排放量 equivalent：污染当量*/
    for (i=0; i<array.length; i++) {
      if (array[i].parentIndex == 0) { /*大气污染物*/
        atmosphereTax += (array[i].emission / array[i].equivalent * atmosphereUnit)
        allTax += atmosphereTax
      } 
      else if (array[i].parentIndex == 1) { /*水污染物*/
        waterTax += (array[i].emission / array[i].equivalent * waterUnit)
        allTax += waterTax
      } 
      else if (array[i].parentIndex == 2) { /*固体污染物*/
        if (array[i].childIndex == 0) {
          solidTax += array[i].emission * 5
        } else if (array[i].childIndex == 1) {
          solidTax += array[i].emission * 15
        } else if (array[i].childIndex == 2) {
          solidTax += array[i].emission * 1000
        } else {
          solidTax += array[i].emission * 25
        }
        allTax += solidTax
      }
      else { /*噪声污染*/
        if (array[i].childIndex == 0) {
          noiseTax += array[i].emission * 350
        } else if (array[i].childIndex == 1) {
          noiseTax += array[i].emission * 700
        } else if (array[i].childIndex == 2) {
          noiseTax += array[i].emission * 1400
        } else if (array[i].childIndex == 3){
          noiseTax += array[i].emission * 2800
        } else if (array[i].childIndex == 4) {
          noiseTax += array[i].emission * 5600
        } else if (array[i].childIndex == 3) {
          noiseTax += array[i].emission * 11200
        }
        allTax += noiseTax
      }
    }
    
    atmosphereTax = parseFloat(atmosphereTax).toFixed(2)
    waterTax = parseFloat(waterTax).toFixed(2)
    solidTax = parseFloat(solidTax).toFixed(2)
    noiseTax = parseFloat(noiseTax).toFixed(2)
    allTax = parseFloat(allTax).toFixed(2)
    console.log(atmosphereTax, waterTax, solidTax, noiseTax, allTax)
    if (count > 0) {
      wx.navigateTo({
        delta: 2,
        url: '../show/show?allTax=' + allTax + "&atmosphereTax=" + atmosphereTax + "&waterTax=" + waterTax + "&solidTax=" + solidTax + "&noiseTax=" + noiseTax,
      })
    }
  }
})
