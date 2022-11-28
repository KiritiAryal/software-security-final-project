package com.softwaresecurity.patient;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity

public class Patient {
    @Id
    @GeneratedValue
    private int patientId;
    private String topic;
    private String issue;
    private String physician;
    private String testDate;
    private String availableDate;
    private String testResult;
    private String medication;
    private String medicationDescription;

    @Override
    public String toString() {
        return "Patient{" +
                "patientId=" + patientId +
                ", topic='" + topic + '\'' +
                ", issue='" + issue + '\'' +
                ", physician='" + physician + '\'' +
                ", testDate='" + testDate + '\'' +
                ", availableDate='" + availableDate + '\'' +
                ", testResult='" + testResult + '\'' +
                ", medication='" + medication + '\'' +
                ", medicationDescription='" + medicationDescription + '\'' +
                '}';
    }

    public String getTestDate() {
        return testDate;
    }

    public void setTestDate(String testDate) {
        this.testDate = testDate;
    }

    public String getAvailableDate() {
        return availableDate;
    }

    public void setAvailableDate(String availableDate) {
        this.availableDate = availableDate;
    }

    public String getTestResult() {
        return testResult;
    }

    public void setTestResult(String testResult) {
        this.testResult = testResult;
    }

    public String getMedication() {
        return medication;
    }

    public void setMedication(String medication) {
        this.medication = medication;
    }

    public String getMedicationDescription() {
        return medicationDescription;
    }

    public void setMedicationDescription(String medicationDescription) {
        this.medicationDescription = medicationDescription;
    }

    public Patient(int patientId, String topic, String issue, String physician, String testDate, String availableDate, String testResult, String medication, String medicationDescription) {
        this.patientId = patientId;
        this.topic = topic;
        this.issue = issue;
        this.physician = physician;
        this.testDate = testDate;
        this.availableDate = availableDate;
        this.testResult = testResult;
        this.medication = medication;
        this.medicationDescription = medicationDescription;
    }

    public String getPhysician() {
        return physician;
    }

    public void setPhysician(String physician) {
        this.physician = physician;
    }


    public Patient() {
    }

    public Patient(int patientId, String topic, String issue, String physician) {
        this.patientId = patientId;
        this.topic = topic;
        this.issue = issue;
        this.physician = physician;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }
}
