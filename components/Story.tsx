import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Story() {
  return (
    <View>
      <View style={styles.navbar}>
        <Image
          source={{
            uri: 'https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png',
          }}
          style={styles.logo}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384090.png',
          }}
          style={styles.messengerIcon}
        />
      </View>

      <ScrollView horizontal={true} style={styles.storyContainer}>
        <View style={styles.individualContainer}>
          <Image
            source={{
              uri: 'https://princid.github.io/assets/profile.jpeg',
            }}
            style={styles.storyImage}
          />
          <Text style={styles.storyOwner}>Your Story</Text>
        </View>
        <View style={styles.individualContainer}>
          <Image
            source={{
              uri: 'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg',
            }}
            style={styles.storyImage}
          />
          <Text style={styles.storyOwner}>hitesh_32</Text>
        </View>
        <View style={styles.individualContainer}>
          <Image
            source={{
              uri: 'https://barbend.com/wp-content/uploads/2022/01/Chris-Bumstead-1.jpg',
            }}
            style={styles.storyImage}
          />
          <Text style={styles.storyOwner}>re_fit5</Text>
        </View>
        <View style={styles.individualContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?cs=srgb&dl=pexels-ali-pazani-2681751.jpg&fm=jpg',
            }}
            style={styles.storyImage}
          />
          <Text style={styles.storyOwner}>_.dianna._</Text>
        </View>
        <View style={styles.individualContainer}>
          <Image
            source={{
              uri: 'https://www.kahanihindi.com/wp-content/uploads/2020/02/Whatsapp-DP-Profile-FULL-SIZE-1.jpg',
            }}
            style={styles.storyImage}
          />
          <Text style={styles.storyOwner}>pizzifind._rik</Text>
        </View>
        <View style={styles.individualContainer}>
          <Image
            source={{
              uri: 'https://i0.wp.com/shayarinquotes.com/wp-content/uploads/2021/10/WhatsApp-DP-New-2021-3.jpg?resize=400%2C400&ssl=1',
            }}
            style={styles.storyImage}
          />
          <Text style={styles.storyOwner}>_dinvi_</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
  },
  messengerIcon: {
    width: 25,
    height: 25,
    marginLeft: 190,
    marginTop: 10,
  },
  storyContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  individualContainer: {
    marginHorizontal: 6,
    alignItems: 'center',
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff8501',
  },
  storyOwner: {
    marginTop: 4,
    fontSize: 12,
    color: '#000',
  },
});
