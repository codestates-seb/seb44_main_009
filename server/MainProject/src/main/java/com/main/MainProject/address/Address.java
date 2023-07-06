package com.main.MainProject.address;

import com.main.MainProject.order.entity.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;

    @OneToOne
    @JoinColumn(name = "order_id")
    Order order;

    private String receiverName;

    private int zipcode;

    private String addressName;

    private String addressDetails;

    private String telNum;

    private String request;

    public Address(String receiverName, int zipcode, String addressName,
                   String addressDetails, String telNum, String request) {
        this.receiverName = receiverName;
        this.zipcode = zipcode;
        this.addressName = addressName;
        this.addressDetails = addressDetails;
        this.telNum = telNum;
        this.request = request;
    }
}
