package com.ebuy.data;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class Bogo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    @OneToOne
    @JoinColumn(name = "product_ID",referencedColumnName = "id")
    private Product product;
    private Integer level;
}
