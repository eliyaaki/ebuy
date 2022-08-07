package com.ebuy.data;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class Discount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Integer amount;
}
