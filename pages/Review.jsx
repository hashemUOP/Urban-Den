import React, { useState } from 'react';
import {View,StyleSheet,TouchableOpacity,Modal,ScrollView, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomText from '../components/customText';
import Stars from '../components/product_details/Stars';
import StatisticsBar from '../components/product_details/StatisticsBar';

export default function Review({ navigation, reviewsArray = [] }) {
  const [isVisible, setIsVisible] = useState(false);
  const [reviewText, setReviewText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={18} color="black" />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <CustomText style={styles.title}>Reviews</CustomText>
        </View>
        <View style={styles.placeholder} />
      </View>

      {/* content */}
      <View style={styles.content}>
        <CustomText style={{ fontSize: 40 }}>4.0</CustomText>
        <Stars numOfStars={4} />
        <CustomText style={{ marginTop: 10 }}>
          based on {reviewsArray?.length ?? 0} reviews
        </CustomText>

        <StatisticsBar
          excellentProgress="70"
          goodProgress="50"
          averageProgress="30"
          belowAverageProgress="20"
          poorProgress="10"
        />

        {/* reviews scroll view */}
        <ScrollView style={styles.reviewsContainer}>
          {reviewsArray.length > 0 ? (
            // if product has reiews
            reviewsArray.map((r, i) => (
              <CustomText key={i} style={styles.reviewItem}>
                {r.user}: {r.comment}
              </CustomText>
            ))
          ) : (
            //if products doesnt have reviews
            <View style={{marginTop:120,alignSelf:"center"}}>
              <CustomText >
                Be the first to review this product!
              </CustomText>
            </View>
          )}
        </ScrollView>


        {/* visible button */}
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => setIsVisible(true)}
        >
          <CustomText style={styles.openButtonText}>
            Write a Review
          </CustomText>
        </TouchableOpacity>
      </View>

      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
       <View style={styles.backdrop}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <CustomText style={styles.modalText}>Write a review</CustomText>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsVisible(false)}
              >
                <CustomText style={styles.closeText}>X</CustomText>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Type your review here..."
              multiline
              numberOfLines={4}
              value={reviewText}
              onChangeText={setReviewText}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => onSubmitReview(reviewText)}
            >
              <CustomText style={styles.submitButtonText}>Submit</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

async function submitReview(title,user_id,content,product_id,numOfStars) {
  try{
    const req = await fetch(
      'http://'+ipAddress+':8000/api/reviews/create',
      {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({ // field_name_in_models.py : "jsx var"
          review_title: title,
          review_content: content,
          review_rating: numOfStars,
          firestore_user_uid: user_id,
          product_id: product_id
        })
      }    
    )
    Alert.alert('Review added successfully');
    isSubmittedUpdate(True);
  }catch(error){
    Alert.alert("error occured: "+error)
  }
  
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'rgba(218,218,218,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: { flex: 1, alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '600' },
  placeholder: { width: 45 },

  content: { flex: 1, alignItems: 'center', paddingTop: 20 },
  reviewsContainer: { width: '100%', marginTop: 20 },
  reviewsContent: { paddingHorizontal: 20 },
  reviewItem: { paddingVertical: 8 },
  noReviewsView: { alignItems: 'center', paddingVertical: 20 },
  noReviewsText: { marginBottom: 12 },

  openButton: {
    marginTop: 'auto',
    backgroundColor: '#ab7e42',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  openButtonText: { color: '#fff', fontWeight: '600' },

  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'stretch',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalText: { fontSize: 16, fontWeight: '600' },
  closeButton: { padding: 4 },
  closeText: { fontSize: 16, color: '#ab7e42' },

  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: '#ab7e42',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  submitButtonText: { color: '#fff', fontWeight: '600' },
});
