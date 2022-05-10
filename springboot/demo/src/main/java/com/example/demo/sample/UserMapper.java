package com.example.demo.sample;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

import com.example.demo.common.PagingBean;
import com.example.demo.common.UserInfoBean;

@Mapper
@Repository
public interface UserMapper {
    public List<HashMap<String, Object>> selectUsers();

    public Integer getUserTotalCount();

    public List<UserInfoBean> getUserList(PagingBean pagingBean);
}
