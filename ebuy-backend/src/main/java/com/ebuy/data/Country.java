package com.ebuy.data;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "country")
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
}