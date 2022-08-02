package com.ebuy.dto;

import lombok.Data;

@Data
public class GetClubMemberRequest {
    private String loginName;
    private String passWord;
}
