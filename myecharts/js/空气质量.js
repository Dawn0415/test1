
        var chart_bcc74a1c05b6489ba060bbc7cb4cdddb = echarts.init(
            document.getElementById('bcc74a1c05b6489ba060bbc7cb4cdddb'), 'light', {renderer: 'canvas'});
        var option_bcc74a1c05b6489ba060bbc7cb4cdddb = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "series": [
        {
            "type": "bar",
            "name": "aqi",
            "legendHoverLink": true,
            "data": [
                98,
                95,
                92,
                89,
                88,
                81,
                81,
                74,
                71,
                67,
                66,
                63,
                63,
                63,
                62,
                62,
                61,
                59,
                58,
                57,
                57,
                56,
                56,
                55,
                55,
                54,
                53,
                53
            ],
            "realtimeSort": false,
            "showBackground": false,
            "stackStrategy": "samesign",
            "cursor": "pointer",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "interval": 0
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "grade",
            "legendHoverLink": true,
            "data": [
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2
            ],
            "realtimeSort": false,
            "showBackground": false,
            "stackStrategy": "samesign",
            "cursor": "pointer",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "interval": 0
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "\u4e3b\u8981\u6c61\u67d3\u7269",
            "legendHoverLink": true,
            "data": [
                "\u7ec6\u9897\u7c92\u7269(PM2.5)",
                "\u7ec6\u9897\u7c92\u7269(PM2.5)",
                "\u7ec6\u9897\u7c92\u7269(PM2.5)",
                "\u9897\u7c92\u7269(PM10)",
                "\u7ec6\u9897\u7c92\u7269(PM2.5)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u81ed\u6c271\u5c0f\u65f6",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)",
                "\u9897\u7c92\u7269(PM10)"
            ],
            "realtimeSort": false,
            "showBackground": false,
            "stackStrategy": "samesign",
            "cursor": "pointer",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "interval": 0
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "aqi",
                "grade",
                "\u4e3b\u8981\u6c61\u67d3\u7269"
            ],
            "selected": {
                "aqi": true,
                "grade": true,
                "\u4e3b\u8981\u6c61\u67d3\u7269": true
            },
            "show": false,
            "right": "10%",
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u5317\u4eac\n\u5317\u4eac",
                "\u6cb3\u5317\n\u4fdd\u5b9a",
                "\u6cb3\u5317\n\u5eca\u574a",
                "\u6cb3\u5317\n\u5510\u5c71",
                "\u6cb3\u5317\n\u77f3\u5bb6\u5e84",
                "\u5929\u6d25\n\u5929\u6d25",
                "\u5c71\u897f\n\u592a\u539f",
                "\u5c71\u4e1c\n\u6ee8\u5dde",
                "\u5c71\u897f\n\u9633\u6cc9",
                "\u6cb3\u5357\n\u90d1\u5dde",
                "\u6cb3\u5317\n\u8861\u6c34",
                "\u5c71\u4e1c\n\u5fb7\u5dde",
                "\u6cb3\u5317\n\u6ca7\u5dde",
                "\u5c71\u897f\n\u664b\u57ce",
                "\u6cb3\u5357\n\u5b89\u9633",
                "\u6cb3\u5357\n\u7126\u4f5c",
                "\u6cb3\u5357\n\u6fee\u9633",
                "\u5c71\u4e1c\n\u6dc4\u535a",
                "\u6cb3\u5317\n\u90a2\u53f0",
                "\u5c71\u4e1c\n\u6d4e\u5b81",
                "\u5c71\u4e1c\n\u804a\u57ce",
                "\u5c71\u4e1c\n\u6d4e\u5357",
                "\u6cb3\u5357\n\u5f00\u5c01",
                "\u5c71\u4e1c\n\u83cf\u6cfd",
                "\u6cb3\u5317\n\u90af\u90f8",
                "\u6cb3\u5357\n\u65b0\u4e61",
                "\u6cb3\u5357\n\u9e64\u58c1",
                "\u5c71\u897f\n\u957f\u6cbb"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u4eca\u65e5\u7a7a\u6c14\u8d28\u91cf\u6392\u540d",
            "target": "blank",
            "subtarget": "blank",
            "left": "center",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false
        }
    ],
    "dataZoom": {
        "show": true,
        "type": "inside",
        "showDetail": true,
        "showDataShadow": true,
        "realtime": true,
        "start": -100,
        "end": 80,
        "orient": "horizontal",
        "zoomLock": false,
        "filterMode": "filter"
    }
};
        chart_bcc74a1c05b6489ba060bbc7cb4cdddb.setOption(option_bcc74a1c05b6489ba060bbc7cb4cdddb);
