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
public class CasualCustomer {
    @Id
    @GeneratedValue
    private long userId;
    private String name;
    private String homeAddress;
    private String emailAddress;
    private OffsetDateTime firstPurchasingDateTime;

}
