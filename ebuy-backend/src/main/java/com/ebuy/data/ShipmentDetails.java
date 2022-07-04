package com.ebuy.data;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class ShipmentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "country_ID", referencedColumnName = "id")
    private Country country;
    @ManyToOne
    @JoinColumn(name = "state_ID", referencedColumnName = "id")
    private State state;
    private Integer zipCode;
    private String street;
    private String houseNumber;
    private String pob;
    private String emailAddress;
}
