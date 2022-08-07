package com.ebuy.data;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class ShipmentPrices {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private Integer basicCharge;
    private Integer itemCharge;

    @Enumerated(EnumType.ORDINAL)
    private ShipmentOption shipmentOptionID;
    private Integer shipmentCompanyID;
    private Integer shipmentDuration;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_area")
    private Area area;
}
