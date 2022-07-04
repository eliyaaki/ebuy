package com.ebuy.data;

import lombok.Data;
import javax.persistence.*;
import java.time.OffsetDateTime;
import java.util.List;

@Data
@Entity
@Table
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long transactionId;
    @Enumerated(EnumType.STRING)
    private CreditCardType creditCard;
    @Enumerated(EnumType.STRING)
    private DeliveryMode deliveryMode;
    @Enumerated(EnumType.STRING)
    private ShipmentOption shipmentOption;
    private OffsetDateTime deliveryDate;
    private OffsetDateTime purchaseDate;
    private double shipmentCost;
    private double totalCost;
    private long userId;
    @ManyToMany
    @JoinTable(
            name = "purchase_product",
            joinColumns = @JoinColumn(name = "transactionId"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    List<Product> products;
    @OneToOne
    @JoinColumn(name = "shipment_details_ID",referencedColumnName = "id")
    private ShipmentDetails shipmentDetails;

}
