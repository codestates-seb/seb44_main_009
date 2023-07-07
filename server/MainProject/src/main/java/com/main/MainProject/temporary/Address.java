package com.main.MainProject.temporary;

import com.main.MainProject.order.entity.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;

//    @OneToOne
//    @JoinColumn(name = "member_id")
//    private Member member;

    @OneToMany(mappedBy = "address", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orderList = new ArrayList<>();

    private String reciverName;

    private int zipcode;

    private String addressName;

    private String addressDetails;

    private String telNum;

    private String request;

    public Address(String reciverName, int zipcode, String addressName,
                   String addressDetails, String telNum, String request) {
        this.reciverName = reciverName;
        this.zipcode = zipcode;
        this.addressName = addressName;
        this.addressDetails = addressDetails;
        this.telNum = telNum;
        this.request = request;
    }
}