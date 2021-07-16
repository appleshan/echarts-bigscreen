package com.zhuoyi.bigscreen.echarts.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

/**
 * @description bi_table
 * @author
 * @date 2021-04-14
 */
@TableName("bi_table")
public class BiTable {
    @TableId(value = "log_id", type = IdType.ASSIGN_UUID)
    private int id;

    private String title;

    @TableField(value = "json_value")
    private String jsonValue;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getJsonValue() {
        return jsonValue;
    }
    public void setJsonValue(String jsonValue) {
        this.jsonValue = jsonValue;
    }

}
