package com.ebuy.dto;

import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class GetClubMemberRequest {
    private String loginName;
    private String passWord;
    private OffsetDateTime registrationTime;
}
