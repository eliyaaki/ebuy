package com.ebuy.data;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.OffsetDateTime;

@Data
@Entity
@Table
public class ClubMember {
    @Id
    @GeneratedValue
    private long userId;
    private String loginName;
    private String passWord;
    private String address;
    private String email;
    private OffsetDateTime registrationDateTime;
}
