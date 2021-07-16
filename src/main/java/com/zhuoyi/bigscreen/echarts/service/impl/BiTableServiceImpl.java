package com.zhuoyi.bigscreen.echarts.service.impl;

import java.util.List;

import javax.annotation.Resource;

import com.zhuoyi.bigscreen.echarts.entity.BiTable;
import com.zhuoyi.bigscreen.echarts.mapper.BiTableMapper;
import com.zhuoyi.bigscreen.echarts.service.BiTableService;

import org.springframework.stereotype.Service;

/**
 * @description
 * @author
 * @date 2021-04-14
 */
@Service
public class BiTableServiceImpl implements BiTableService {

    @Resource
    private BiTableMapper bizLogMapper;

    /**
     * 查询所有行
     * @return
     */
    public List<BiTable> queryAllRows() {
        return bizLogMapper.queryAllRows();
    }
}
