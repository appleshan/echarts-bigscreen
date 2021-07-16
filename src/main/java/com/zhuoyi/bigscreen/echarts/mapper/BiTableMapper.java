package com.zhuoyi.bigscreen.echarts.mapper;

import java.util.List;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.zhuoyi.bigscreen.echarts.entity.BiTable;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * @description bi_table Mapper
 * @author
 * @date 2021-04-14
 */
@Mapper
@Repository
public interface BiTableMapper extends BaseMapper<BiTable> {
    /**
     * 查询所有行
     * @return
     */
    List<BiTable> queryAllRows();
}
