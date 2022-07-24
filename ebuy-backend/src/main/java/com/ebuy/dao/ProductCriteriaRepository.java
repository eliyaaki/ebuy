package com.ebuy.dao;


import com.ebuy.data.Product;
import com.ebuy.dto.ProductSearchCriteriaDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
@Repository
public class ProductCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public ProductCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.criteriaBuilder = entityManager.getCriteriaBuilder();
    }


    public List<Product> findAllWithFilters(ProductSearchCriteriaDto productSearchCriteria){
        CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
        Root<Product> productRoot = criteriaQuery.from(Product.class);
        Predicate predicate = getPredicate(productSearchCriteria, productRoot);
        criteriaQuery.where(predicate);

        TypedQuery<Product> typedQuery = entityManager.createQuery(criteriaQuery);

        return typedQuery.getResultList();
    }

    private Predicate getPredicate(ProductSearchCriteriaDto productSearchCriteria,
                                   Root<Product> productRoot) {
        List<Predicate> predicates = new ArrayList<>();
        if(Objects.nonNull(productSearchCriteria.getAuthor())){
            predicates.add(
                    criteriaBuilder.like(productRoot.get("author"),
                            "%" + productSearchCriteria.getAuthor() + "%")
            );
        }
        if(Objects.nonNull(productSearchCriteria.getTitle())){
            predicates.add(
                    criteriaBuilder.like(productRoot.get("title"),
                            "%" + productSearchCriteria.getTitle() + "%")
            );
        }
        if(Objects.nonNull(productSearchCriteria.getKeywords())){
            predicates.add(
                    criteriaBuilder.like(productRoot.get("keyWords"),
                            "%" + productSearchCriteria.getKeywords() + "%")
            );
        }
        if(Objects.nonNull(productSearchCriteria.getCategory())){
            predicates.add(
                    criteriaBuilder.like(productRoot.get("category"),
                            "%" + productSearchCriteria.getCategory() + "%")
            );
        }
        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
}
