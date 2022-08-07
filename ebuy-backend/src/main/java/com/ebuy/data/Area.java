package com.ebuy.data;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table
public class Area {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String name;
    @OneToMany(mappedBy="area")
    private List<Country> countries;
    @OneToMany(mappedBy="area")
    private List<ShipmentPrices> shipmentPrices;

}
