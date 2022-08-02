package com.ebuy.service;

import com.ebuy.dao.*;
import com.ebuy.data.*;
import com.ebuy.dto.GetClubMemberRequest;
import com.ebuy.dto.GetClubMemberResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@AllArgsConstructor
@Service
public class RegistrationService {
    @Autowired
    private final ClubMemberRepository clubMemberRepository;
    @Autowired
    private final CasualCustomerRepository casualCustomerRepository;
    @Autowired
    private final CountryRepository countryRepository;
    @Autowired
    private final StateRepository stateRepository;

    @Autowired
    private final BogoRepository bogoRepository;

    public void saveClubMemberUser(ClubMember clubMemberUser){
        ClubMember existingLogin=clubMemberRepository.findByLoginName(clubMemberUser.getLoginName());
        if (existingLogin==null) {
            clubMemberRepository.save(clubMemberUser);
        }
    }
    public GetClubMemberResponse getClubMemberUser(GetClubMemberRequest clubMemberRequest){
        ClubMember existingClubMember=clubMemberRepository.findByLoginNameAndPassWord(clubMemberRequest.getLoginName(), clubMemberRequest.getPassWord());
        GetClubMemberResponse clubMemberResponse=new GetClubMemberResponse();
//        if (existingClubMember.getRegistrationDateTime().getYear()){
//
//        }
        Bogo bogo=getRandomBogo();
        clubMemberResponse.setBogo(bogo);
        clubMemberResponse.setAddress(existingClubMember.getAddress());
        clubMemberResponse.setLoginName(existingClubMember.getLoginName());
        return clubMemberResponse;
    }

    private Bogo getRandomBogo() {
        List<Bogo> bogosList = bogoRepository.findAll();
        Random rand=new Random();
        return bogosList.get(rand.nextInt(bogosList.size()));
    }

    public void saveCasualUser(CasualCustomer casualCustomer){
        casualCustomerRepository.save(casualCustomer);
    }
    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }
    public List<State> getAllStates(Country country){
        if (country.getName().equals("US")) return stateRepository.findAll();
        return null;
    }
}
