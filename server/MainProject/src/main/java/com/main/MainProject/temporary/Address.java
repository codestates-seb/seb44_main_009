package com.main.MainProject.temporary;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Address {
    @Id
    private Long addressId;

    private Member member;

    private String reciverName;

    private int zipcode;

    private String addressName;

    private String addressDetails;

    private String telNum;

    private String request;
}
