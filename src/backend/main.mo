import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Map "mo:core/Map";

actor {
  type Enquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compare(e1 : Enquiry, e2 : Enquiry) : Order.Order {
      Nat.compare(e1.id, e2.id);
    };

    public func compareByTimestamp(e1 : Enquiry, e2 : Enquiry) : Order.Order {
      Int.compare(e1.timestamp, e2.timestamp);
    };
  };

  var enquiryId = 0;
  let enquiries = Map.empty<Nat, Enquiry>();

  type NewEnquiry = {
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    message : Text;
  };

  public shared ({ caller }) func submitEnquiry(data : NewEnquiry) : async () {
    if (data.name.size() == 0) { Runtime.trap("Name cannot be empty") };
    if (data.email.size() == 0) { Runtime.trap("Email cannot be empty") };
    if (data.phone.size() == 0) { Runtime.trap("Phone cannot be empty") };
    if (data.service.size() == 0) { Runtime.trap("Service cannot be empty") };
    if (data.message.size() == 0) { Runtime.trap("Message cannot be empty") };

    let newEnquiry : Enquiry = {
      id = enquiryId;
      name = data.name;
      email = data.email;
      phone = data.phone;
      service = data.service;
      message = data.message;
      timestamp = Time.now();
    };

    enquiries.add(enquiryId, newEnquiry);
    enquiryId += 1;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.values().toArray().sort(Enquiry.compareByTimestamp);
  };

  public query ({ caller }) func getEnquiry(id : Nat) : async Enquiry {
    switch (enquiries.get(id)) {
      case (null) { Runtime.trap("Enquiry not found") };
      case (?enquiry) { enquiry };
    };
  };
};
