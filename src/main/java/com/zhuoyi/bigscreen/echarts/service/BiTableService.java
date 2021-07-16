package com.zhuoyi.bigscreen.echarts.service;

import java.util.List;

import com.zhuoyi.bigscreen.echarts.entity.BiTable;

/**
 * @description
 * @author
 * @date 2021-04-14
 */
public interface BiTableService {
    /**
     * 查询所有行
     * @return
     */
    List<BiTable> queryAllRows();
}
