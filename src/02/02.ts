type StreetType = {
    title: string
}

type AddressType = {
    number?: number
    street : StreetType
}

type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}


type GovernmentBuildingType2 = {
    type: 'HOSPITAL' | 'FIRE_STATION'
    butget: number
    staffCount: number
    address: AddressType

}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingType2>
    citizensNumber: number
}


