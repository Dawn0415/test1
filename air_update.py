import urllib.request
import json
import jsonpath
from pyecharts import options as opts
from pyecharts.globals import ThemeType
from pyecharts.charts import Bar
import time
def air_update():
    url=r"https://aqiapp.daqi110.com/report/city/rank/group?group=28&period=0"
    #  请求头
    headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) '
                            'AppleWebKit/537.36 (KHTML, like Gecko)'
                            'Chrome/90.0.4430.212 Safari/537.36'}
    #  添加请求头
    req=urllib.request.Request(url,headers=headers)
    #  请求网页，返回响应对象
    response=urllib.request.urlopen(req)
    #  读取json数据并解码
    data=response.read().decode('utf-8')
    #  反序列化成python对象
    js=json.loads(data)
    #  数据抽取
    #  api空气指数列表
    aqi=jsonpath.jsonpath(js,'$.list[*].aqi')
    #  城市名列表
    city=jsonpath.jsonpath(js,'$.list[*].city')
    #  省份列表
    province=jsonpath.jsonpath(js,'$.list[*].province')
    #  空气等级列表
    grade=jsonpath.jsonpath(js,'$.list[*].grade')
    #  主要污染物列表
    pp=jsonpath.jsonpath(js,'$.list[*].pp')
    #  省份城市组合列表
    province_city=[]
    a=0
    for i in province:
        str=i+'\n'+city[a]
        province_city.append(str)
        a=a+1

    bar = (

        #初始化  主题  大小
        Bar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT,width='1000px',height='500px'))
        #  添加x轴数据
        .add_xaxis(xaxis_data=province_city)
        #  添加3个y轴数据
        .add_yaxis('aqi',aqi,color='#EFE42A')
        .add_yaxis("grade",grade,color='#64BD3D')
        .add_yaxis("主要污染物",pp,color='#EE9201')
        #  全局配置顶
        .set_global_opts(title_opts=opts.TitleOpts(title="今日空气质量排名",pos_left='center'),  #  标题配置  标题名  位置
                        legend_opts=opts.LegendOpts(pos_right='10%',is_show=False),  #  图例配置  位置  不显示图例
                        tooltip_opts=opts.TooltipOpts(trigger='axis', axis_pointer_type="cross"),  #  提示框配置
                        datazoom_opts=opts.DataZoomOpts(type_='inside',range_start=-100)  #  区域缩放配置
                        )
        .set_series_opts(label_opts=opts.LabelOpts(position='top',interval=0))  #  系列配置顶
    )
    return bar