package com.ebuy.dto;

import com.ebuy.data.Bogo;
import lombok.Data;

@Data
public class GetClubMemberResponse {
    private String loginName;
    private String address;
    private Bogo bogo;
}
