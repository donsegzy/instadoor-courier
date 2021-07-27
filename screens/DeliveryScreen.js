import React, {useState, useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    SafeAreaView,
    Dimensions,
    Platform,
    StatusBar,
    Button
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import RNLocation from 'react-native-location';

// components
import OrderDetails from '../components/OrderDetails';
import Header from '../components/Header'
import ButtonItem from '../components/ButtonItem';
import AppText from '../components/AppText';
import BottomSheet from "../components/BottomSheet";
import Timeline from "../components/Timeline";

// assets
import ChevronUpSvg from "../assets/Icon/ChevronUp.svg"
import DoneSvg from "../assets/Icon/Done.svg";
import LocationMarkerAltSvg from "../assets/Icon/LocationMarkerAlt.svg";
import EnrouteLocationSvg from "../assets/Icon/EnrouteLocation.svg";
import OrderPickUpSvg from "../assets/Icon/OrderPickUp.svg";
import MarkerSvg from "../assets/Icon/Marker.svg";
import UserLocationSvg from "../assets/Icon/UserLocation.svg";

// constants
import Colors from '../constants/colors'
import FontSizes from '../constants/fontSizes';

// RNLocation.configure({ allowsBackgroundLocationUpdates: true });
RNLocation.configure({
    distanceFilter: 0,
    desiredAccuracy: {
        ios: "bestForNavigation", // best
        android: "balancedPowerAccuracy"
      },
   })

const DeliveryScreen = ({navigation, route}) => {

    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const BottomSheetRef = useRef(null);
    const mapRef = useRef(null)

    const [driverHeading, setDriverHeading] = useState(0)
    const [cameraHeading, setCameraHeading] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [initialCoordinates , setInitialCoordinates ] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    })
    const [coordinates , setCoordinates ] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    })

    const [isPermissionGranted, setIsPermissionGranted] = useState(false)
    // const [isTripComplete, setIsTripComplete] = useState(false)
    const [unsubscribeFn, setUnsubscribeFn] = useState({'unsub': null})

    const goToPrevPage = () => {
        unsubscribeFn.unsub()
        navigation.navigate('Home')
    }

    const updateCameraHeading = () => {
        const map = mapRef.current;
        map.getCamera().then((info) => {
            setCameraHeading(info.heading);
        });
    }

    const getLatestLocationFn = async () => {
        let location;
        if (initialCoordinates.latitude === 0 && initialCoordinates.longitude === 0) {
            location = await RNLocation.getLatestLocation({timeout: 6000})
    
            // TODO: How to handle when location returns null

            if(!location) {
                location = await RNLocation.getLatestLocation({timeout: 6000})
            }
        }

        return location
    }

    const checkPermission = () => {
        const permission = RNLocation.checkPermission({
            ios: 'whenInUse', // or 'always'
            android: {
              detail: 'coarse' // or 'fine'
            }
          });
          return permission
    }
    
    useEffect(async () => {
        try {
            let location;
             //   check for permission
            let permission = await checkPermission();
    
            if (!permission) {
                permission = await RNLocation.requestPermission({
                    ios: "whenInUse",
                    android: {
                    detail: "coarse",
                    rationale: {
                        title: "We need to access your location",
                        message: "We use your location to show where you are on the map",
                        buttonPositive: "OK",
                        buttonNegative: "Cancel"
                    }
                    }
                })

                setIsPermissionGranted(permission);
                location = await getLatestLocationFn()
                
            } else {
                setIsPermissionGranted(true)
                location = await getLatestLocationFn()

            }
           
            setInitialCoordinates({...initialCoordinates ,latitude: location.latitude, longitude: location.longitude})
        } catch(err) {
            // TODO: add appropriate action here
            console.log(err);
        }

        setIsLoading(false);
    }, [])

    useEffect(async () => {
        if(isPermissionGranted) {
            try {
                    const unsubscribe = RNLocation.subscribeToLocationUpdates(locations => {
                        // TODO: Check if the location hasnt changed
                        // console.log('location updates',locations)
                        setCoordinates({
                            ...coordinates,
                            latitude: locations[locations.length - 1].latitude,
                            longitude: locations[locations.length - 1].longitude,
                        })
                        setDriverHeading(locations[locations.length - 1].course)
                    })
                    setUnsubscribeFn({
                        'unsub': unsubscribe
                    })
            } catch(err) {
                console.log(err)
            }
        }     
        return () => {
            // Unsubscribe
          unsubscribeFn.unsub();
        }
    }, [isPermissionGranted])

    const ArrivedPickup = ({title, location, time}) => {
        return (
            <View style={styles.arrivedPickUpContainer}>
                <AppText style={styles.arrivedPickUpHeaderTitle}>
                    {title} 
                </AppText>
                <AppText style={styles.arrivedPickUpTitle}>
                    {location}
                </AppText>
                <AppText style={styles.arrivedPickUpText}>
                    {time}
                </AppText>
            </View>
        )
    }

    const TimelineComponent = ({title, description}) => {
        return (
            <>
             <AppText style={styles.timelineContentTitle}>
                {title}
            </AppText>
            <AppText style={styles.timelineContentText}>
                {description}
            </AppText>
            </>
        )
    }

    return (
        <>
            <StatusBar backgroundColor={'transparent'} barStyle="dark-content" translucent={true} />
            <SafeAreaView style={Platform.OS === "android" ? {paddingTop: StatusBar.currentHeight, flex: 1 }: {paddingTop: 0, flex: 1}}>
                <View style={{paddingHorizontal: 20}}>
                        <Header currentScreen={route.name} customFn={goToPrevPage} navigation={navigation} />
                </View>
                <View style={{flex: 1}}>
                {
                !isLoading ?
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        ref={mapRef}
                        style={styles.map}
                        // initialRegion={{
                        //     ...initialCoordinates
                        //     latitudeDelta: LATITUDE_DELTA,
                        //     longitudeDelta: LONGITUDE_DELTA
                        // }}
                        // region={coordinates}
                        // onRegionChange={() => set}
                        initialRegion={initialCoordinates}
                        // followsUserLocation={true}
                        // showsUserLocation={true}
                        loadingEnabled={true}
                        showsCompass={true}
                        showsMyLocationButton={true}

                        onTouchEnd={() => {
                            updateCameraHeading();
                        }}
                        onTouchCancel={() => {
                            updateCameraHeading();
                        }}
                        onTouchStart={() => {
                            updateCameraHeading();
                        }}
                        onTouchMove={() => {
                            updateCameraHeading();
                        }}
                    >
                        {/* start location */}
                            {/* <Marker anchor={{x: .5,y: .5}} centerOffset={{x: -3, y: -12 }} coordinate={{latitude: initialCoordinates.latitude, longitude:  initialCoordinates.longitude}}> 
                                <View>
                                    <LocationSvg style={{color: Colors.blueColorLight}} />
                                </View>
                            </Marker>  */}
                            
                        {/* destination location */}
                        
                            <Marker anchor={{x: .45,y: .8}} centerOffset={{x: 2, y: -8 }} coordinate={{latitude: initialCoordinates.latitude + .05, longitude: initialCoordinates.longitude - .05}}> 
                                <View>
                                    <MarkerSvg style={{color: Colors.pinkMedium}} />
                                </View>
                            </Marker>
                        {/* for the driver location itself */}
                            <Marker anchor={{x: .45,y: .8}} centerOffset={{x: 2, y: -8 }} coordinate={{latitude: coordinates.latitude, longitude:  coordinates.longitude}}> 
                                <View style={{
                                    // TODO: confirm rotation on physical device
                                    transform: [
                                        {rotate: `${(driverHeading + 35) - cameraHeading}deg`}
                                    ]
                                }}>
                                    <UserLocationSvg  />
                                </View>
                            </Marker>

                        <MapViewDirections
                            origin={{latitude: initialCoordinates.latitude, longitude:  initialCoordinates.longitude}}
                            destination={{latitude: initialCoordinates.latitude + .05, longitude:  initialCoordinates.longitude - .05}}
                            apikey={'AIzaSyCvy2kNWrAA1UN-IPPulV_jzdKUlZ8K5V8'}
                            strokeWidth={5}
                            strokeColor={Colors.pinkMedium}
                            timePrecision={'now'}
                            // optimizeWaypoints={true} // note this will consume more money
                            onStart={(params) => { // this is called when routing starts
                                // console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                            }}
                            onReady={result => { // this is called when routing has successfully finished
                                // console.log(`Distance: ${result.distance} km`)
                                // console.log(`Duration: ${result.duration} min.`)
            
                            }}
                            onError={(errorMessage) => {
                            // console.log('GOT AN ERROR');
                            }}
                        />
                    </MapView>
                : null
           }
                </View>
                <TouchableOpacity onPress={() => BottomSheetRef.current.open()} style={styles.infoContainer}>
                        <AppText weight='600' style={{...styles.infoContainerText, color: Colors.pinkMedium}}>
                            View Delivery Information
                        </AppText>
                        <ChevronUpSvg />
                </TouchableOpacity>
            </SafeAreaView>

           <BottomSheet buttonTitle={'Show Customer Order'} height={hp('80%')} allowScrolling={true} refBottomSheet={BottomSheetRef}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, width: '100%', padding: 10}}>
                
                    <View style={{marginBottom: 30, width: '100%'}}>
                        <OrderDetails title='Order Details' description='Milton Ward placed an order at MacDonald' addBgColor={true} />
                        <Timeline iconSvg={<LocationMarkerAltSvg />} hideLine  timelineComponent={<ArrivedPickup title='Enroute Pickup' location='6391 Elgin St. Celina, Delaware 10299' time='0 mins away' />} />
                        <Timeline iconSvg={<DoneSvg />}  timelineComponent={<TimelineComponent title='Enroute Pickup' description='6391 Elgin St. Celina, Delaware 10299' />} />
                        <Timeline iconSvg={<DoneSvg />}  timelineComponent={<TimelineComponent title='Arrived Pickup Location ' description='Pickup Location Address here' />} />
                        <Timeline iconSvg={<OrderPickUpSvg />}  timelineComponent={<TimelineComponent title='Order Picked Up' description='12:00pm' />} />
                        <Timeline iconSvg={<EnrouteLocationSvg />}  timelineComponent={<TimelineComponent title='Enroute to Customer Location' description='Trip time: 20 Mins' />} />
                        <Timeline iconSvg={<DoneSvg />} hideLine={true}  timelineComponent={<TimelineComponent title='Arrived Customer Location' description='2972 Westheimer Rd. Santa Ana, Illinois 85486 ' />} />
                    </View>
                    <View style={{marginBottom: 20}}>
                        <ButtonItem text="Complete Transaction" />
                    </View>
                </ScrollView>
            </BottomSheet> 
        </>
    )
}


const styles = StyleSheet.create({
    infoContainer: {
        flex: .07,
        marginVertical: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: Colors.pinkLight,
        paddingHorizontal: 24,
        paddingVertical: 5,
        borderRadius: 8
    },
    infoContainerText: {
        fontSize: FontSizes.lg,
        lineHeight: FontSizes.xxl,
        color: Colors.blackColorPearl
    },

    // timeline section
    timelineContentTitle: {
        color: Colors.blackColorPearl,
        fontSize: FontSizes.lg,
        lineHeight: 24
    },
    timelineContentText: {
        color: Colors.greyColorMedium,
        fontSize: 12,
        lineHeight: 16
    },

       // timeline section
    arrivedPickUpContainer: {
        width: '95%'
    },
    arrivedPickUpHeaderTitle: {
        color: Colors.pinkMedium,
        fontSize: FontSizes.md,
        lineHeight: 24
    },
    arrivedPickUpTitle: {
        color: Colors.blackColorPearl,
        fontSize: FontSizes.lg,
        lineHeight: 24,
    },
    arrivedPickUpText: {
        color: Colors.greyColorMedium,
        fontSize: 12,
        lineHeight: 16
    },

    map: {
        flex: 1,
        marginBottom: -10,
    }
});
export default DeliveryScreen
