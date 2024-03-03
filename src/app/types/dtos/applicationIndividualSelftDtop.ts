import { offShoreAccountDto } from "./offshoreAccountDto"

export const applicationTypes = ["Self", "Individual Representative", "Entity Representative"]

export interface documentDto {
    file: string,
    id: number
}

export interface applicationIndividualSelfDto {
    id: number,
    createdAt: string,
    updatedAt: string,
    clientStatus: string,
    completed: boolean,
    firstName: string,
    middleName: string,
    surname: string,
    initials: string,
    previousName: string,
    dateOfBirth: string,
    maritalStatus: string,
    nationality: string,
    ecowasCard: string,
    passportNumber: string,
    passportIssuingCountry: string,
    passportExpiryDate: string,
    phoneOne: string,
    phoneTwo: string,
    applyingForVDP: string,
    awareOfAudit: string,
    assessmentYear: number,
    accountsSubmitting: number,
    type: "Self" | "Individual Representative" | "Entity Representative",
    boxNumber: string,
    postalTown: string,
    postalRegion: string,
    digitalAddres: string,
    houseNumber: string,
    streetName: string,
    location: string,
    region: string,
    town: string,
    modeOfContact: string,
    repFirstName: string,
    repSurname: string,
    repPassportNumber: string,
    repTINNumber: string,
    repEcowasCardNumber: string,
    repPhoneOne: string,
    repPhoneTwo: string,
    repPassportIssuingCountry: string,
    repCapacity: string,
    entityRegisteredName: string,
    entityPreviousName: string,
    entityRegisteredNumber: string,
    entityRelatedEntities: string,
    entityEmail: string,
    entityTelephoneNumber: string,
    entityWebAddress: string,
    dateOfIncorporation: string,
    declaration: boolean
    accounts: offShoreAccountDto[]
    attachments: string[] | File[] | documentDto[]
}
