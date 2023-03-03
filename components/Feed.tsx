import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Feed() {
  return (
    <View>
      {/* 1st Post */}
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://pixlok.com/wp-content/uploads/2021/01/CSK_Logo_with_satin_flag.jpg',
          }}
          style={styles.userProfile}
        />
        <View>
          <Text style={styles.captionUserName}>chennaiipl</Text>
          <Text style={styles.userLocation}>Anbuden, Chennai, India</Text>
        </View>
        {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png',
          }}
          style={styles.moreIcon}
        /> */}
      </View>

      <Image
        source={{
          uri: 'https://img.jagranjosh.com/images/2022/March/2632022/CSK_player_list_2022_stats_past_records.jpg',
        }}
        style={styles.feedImage}
      />
      <View style={styles.reaction}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641323.png',
          }}
          style={styles.likeIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3031/3031126.png',
          }}
          style={styles.commentIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/786/786205.png',
          }}
          style={styles.shareIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/157/157912.png',
          }}
          style={styles.saveIcon}
        />
      </View>
      <Text style={styles.userInteraction}>
        Liked by{' '}
        <Text style={styles.userLikes}>pritrage, hitesh_32 and 53 others</Text>
      </Text>
      <View style={styles.captionContainer}>
        <Text style={styles.captionUserName}>
          chennaiipl{'  '}
          <Text style={styles.caption}>
            Whistle Podu 🦁 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Adipisci quos doloremque commodi expedita quo aliquam
            reprehenderit sequi soluta, minus molestiae ea neque.
          </Text>
        </Text>
      </View>
      {/* 2nd Post */}
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0SiEWRAcaerxyTx8ZnOINw0XA_6qma7rKQ&usqp=CAU',
          }}
          style={styles.userProfile}
        />
        <View>
          <Text style={styles.captionUserName}>_.elina._58</Text>
          <Text style={styles.userLocation}>Amsterdam, Netherlands</Text>
        </View>
        {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png',
          }}
          style={styles.moreIcon}
        /> */}
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW1zdGVyZGFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.feedImage}
      />
      <View style={styles.reaction}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641323.png',
          }}
          style={styles.likeIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3031/3031126.png',
          }}
          style={styles.commentIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/786/786205.png',
          }}
          style={styles.shareIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/157/157912.png',
          }}
          style={styles.saveIcon}
        />
      </View>
      <Text style={styles.userInteraction}>
        Liked by{' '}
        <Text style={styles.userLikes}>pritrage, hitesh_32 and 53 others</Text>
      </Text>
      <View style={styles.captionContainer}>
        <Text style={styles.captionUserName}>
          _.elina._58{'  '}
          <Text style={styles.caption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quos doloremque commodi expedita quo aliquam reprehenderit sequi
            soluta, minus molestiae ea neque. Laborum placeat voluptates,
            distinctio nam doloribus ipsam! Esse!
          </Text>
        </Text>
      </View>
      {/* 3rd Post */}
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.userProfile}
        />
        <View>
          <Text style={styles.captionUserName}>travel_freak</Text>
          <Text style={styles.userLocation}>Mandi, Himachal Pradesh</Text>
        </View>
        {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png',
          }}
          style={styles.moreIcon}
        /> */}
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.feedImage}
      />
      <View style={styles.reaction}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641323.png',
          }}
          style={styles.likeIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3031/3031126.png',
          }}
          style={styles.commentIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/786/786205.png',
          }}
          style={styles.shareIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/157/157912.png',
          }}
          style={styles.saveIcon}
        />
      </View>
      <Text style={styles.userInteraction}>
        Liked by{' '}
        <Text style={styles.userLikes}>pritrage, hitesh_32 and 53 others</Text>
      </Text>
      <View style={styles.captionContainer}>
        <Text style={styles.captionUserName}>
          travel_freak{'  '}
          <Text style={styles.caption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quos doloremque commodi expedita quo aliquam reprehenderit sequi
            soluta, minus molestiae ea neque. Laborum placeat voluptates,
            distinctio nam doloribus ipsam! Esse!
          </Text>
        </Text>
      </View>
      {/* 4th Post  */}
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          }}
          style={styles.userProfile}
        />
        <View>
          <Text style={styles.captionUserName}>._ivanka_.</Text>
          <Text style={styles.userLocation}>Christ-church, New-Zealand</Text>
        </View>
        {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png',
          }}
          style={styles.moreIcon}
        /> */}
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1677434853791-35560666da27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
        }}
        style={styles.feedImage}
      />
      <View style={styles.reaction}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641323.png',
          }}
          style={styles.likeIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3031/3031126.png',
          }}
          style={styles.commentIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/786/786205.png',
          }}
          style={styles.shareIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/157/157912.png',
          }}
          style={styles.saveIcon}
        />
      </View>
      <Text style={styles.userInteraction}>
        Liked by{' '}
        <Text style={styles.userLikes}>pritrage, hitesh_32 and 53 others</Text>
      </Text>
      <View style={styles.captionContainer}>
        <Text style={styles.captionUserName}>
          ._ivanka_.{'  '}
          <Text style={styles.caption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quos doloremque commodi expedita quo aliquam reprehenderit sequi
            soluta, minus molestiae ea neque. Laborum placeat voluptates,
            distinctio nam doloribus ipsam! Esse!
          </Text>
        </Text>
      </View>
      {/* 5th Post  */}
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1545776312-71c1641b3849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80',
          }}
          style={styles.userProfile}
        />
        <View>
          <Text style={styles.captionUserName}>sanem49</Text>
          <Text style={styles.userLocation}>Seattle, USA</Text>
        </View>
        {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png',
          }}
          style={styles.moreIcon}
        /> */}
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        }}
        style={styles.feedImage}
      />
      <View style={styles.reaction}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641323.png',
          }}
          style={styles.likeIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3031/3031126.png',
          }}
          style={styles.commentIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/786/786205.png',
          }}
          style={styles.shareIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/157/157912.png',
          }}
          style={styles.saveIcon}
        />
      </View>
      <Text style={styles.userInteraction}>
        Liked by{' '}
        <Text style={styles.userLikes}>pritrage, hitesh_32 and 53 others</Text>
      </Text>
      <View style={styles.captionContainer}>
        <Text style={styles.captionUserName}>
          sanem49{'  '}
          <Text style={styles.caption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quos doloremque commodi expedita quo aliquam reprehenderit sequi
            soluta, minus molestiae ea neque. Laborum placeat voluptates,
            distinctio nam doloribus ipsam! Esse!
          </Text>
        </Text>
      </View>
      {/* 6th Post  */}
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          }}
          style={styles.userProfile}
        />
        <View>
          <Text style={styles.captionUserName}>alayina_87</Text>
          <Text style={styles.userLocation}>London, UK</Text>
        </View>
        {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png',
          }}
          style={styles.moreIcon}
        /> */}
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80',
        }}
        style={styles.feedImage}
      />
      <View style={styles.reaction}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641323.png',
          }}
          style={styles.likeIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3031/3031126.png',
          }}
          style={styles.commentIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/786/786205.png',
          }}
          style={styles.shareIcon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/157/157912.png',
          }}
          style={styles.saveIcon}
        />
      </View>
      <Text style={styles.userInteraction}>
        Liked by{' '}
        <Text style={styles.userLikes}>pritrage, hitesh_32 and 53 others</Text>
      </Text>
      <View style={styles.captionContainer}>
        <Text style={styles.captionUserName}>
          alayina_87{'  '}
          <Text style={styles.caption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quos doloremque commodi expedita quo aliquam reprehenderit sequi
            soluta, minus molestiae ea neque. Laborum placeat voluptates,
            distinctio nam doloribus ipsam! Esse!
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#8c898c',
    padding: 10,
  },
  userProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  userLocation: {
    color: '#8c898c',
    fontSize: 12,
  },
  // moreIcon: {
  //   width: 25,
  //   height: 25,
  //   display: 'flex',
  //   alignItems: 'flex-end',
  // },
  feedImage: {
    width: '100%',
    height: 250,
  },
  reaction: {
    flexDirection: 'row',
    padding: 10,
  },
  likeIcon: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  commentIcon: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  shareIcon: {
    width: 25,
    height: 25,
    marginRight: 20,
    transform: [{rotate: '20deg'}],
  },
  saveIcon: {
    width: 25,
    height: 25,
    marginLeft: 170,
  },
  userLikes: {
    fontWeight: '600',
    color: '#000',
  },
  userInteraction: {
    fontSize: 12,
    paddingLeft: 10,
  },
  captionContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  captionUserName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  caption: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
  },
});
