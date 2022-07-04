package com.ebuy.data;

import lombok.Data;
import java.util.List;
import javax.persistence.*;
import java.time.OffsetDateTime;

@Data
@Entity
@Table
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Enumerated(EnumType.STRING)
    private CategoryDescription category;
    private String author;
    private String title;
    private String keyWords;
    private long price;
    private OffsetDateTime publicationDate;
    @ManyToMany(mappedBy="products")
    private List<Purchase> purchases;

}
