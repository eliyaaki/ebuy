package com.ebuy.dto;

import com.ebuy.data.Country;
import com.ebuy.data.State;
import lombok.Data;

import java.util.List;

@Data
public class countriesDto {
    List<Country> countries;
    List<State> states;
}
