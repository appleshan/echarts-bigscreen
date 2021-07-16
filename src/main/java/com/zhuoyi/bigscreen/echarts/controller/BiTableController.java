package com.zhuoyi.bigscreen.echarts.controller;

import java.util.List;

import javax.annotation.Resource;

import com.zhuoyi.bigscreen.echarts.core.RespBean;
import com.zhuoyi.bigscreen.echarts.entity.BiTable;
import com.zhuoyi.bigscreen.echarts.service.BiTableService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @description 操作日志
 * @author
 * @date 2021-04-14
 */
@RestController
@RequestMapping(value = "bitable")
public class BiTableController {

    @Resource
    private BiTableService biTableService;

    /**
     * 查询
     * @author
     * @date 2021/04/14
     **/
    @GetMapping("/list")
    public RespBean btList() {
        List<BiTable> btList = biTableService.queryAllRows();
        return RespBean.ok("bitable", btList);
    }

}
