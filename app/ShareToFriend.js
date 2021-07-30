'use strict';
import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

import UShare from './umeng/share/share';
import SharePlatform from './umeng/share/SharePlatform';

const shareIconWechat = require('./images/share_icon_wechat.png');
const shareIconMoments = require('./images/share_icon_moments.png');
const shareIconQQ = require('./images/share_icon_qq.png');


class ShareToFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShareModal: false,
        }
    }
    render() {
        let down_qr = "https://www.xiushangsh.com/app_images/down_qr.png";
        let qrcode = "https://www.xiushangsh.com/app_images/qrcode.jpg";
        let title = "开网店就在秀上，各种优质小服务，等您来享";
        let description = "秀上是一个专业做服务的APP。是您管理小事业，零成本创业的优选。小服务也有平台，也有运营，也有希望！";
        let kUrlImageShareDefault         = 'https://www.xiushangsh.com/app_images/share_default.jpg';
        let kUrlAppDownload               = 'https://www.xiushangsh.com/download.html';
        return (
            <View style={{backgroundColor:'#f5f5f5',flex:1}}>

                <View style={styles.content_style}>
                    <View style={styles.content_share}>
                        <Image source={{uri:down_qr}} style={styles.down_qr}/>
                        <Text style={{marginTop:8}}>扫描下载秀上App</Text>
                    </View>
                    <View style={styles.content_share}>
                        <Image source={{uri:qrcode}} style={styles.qrcode_img}/>
                        <Text style={{marginTop:8}}>扫描关注秀上</Text>
                    </View>
                </View>

                <View
                    key={'spinner'}
                    style={styles.spinner}
                >
                    <View style={styles.spinnerContent}>
                        <Text style={[styles.spinnerTitle, { fontSize: 20, color: 'black' }]}>
                            分享到
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={() => {
                        UShare.share(title,
                            description,
                            kUrlAppDownload,
                            kUrlImageShareDefault,
                        SharePlatform.WECHAT,
                        (code, message) => {
                            // 分享成功：code=200
                            // ToastAndroid.show(message,ToastAndroid.SHORT);
                        });
                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image
                                        style={styles.shareIcon}
                                        source={shareIconWechat}
                                    />
                                    <Text style={styles.spinnerTitle}>
                                        微信
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={() => {
                        UShare.share(title,
                            description,
                            kUrlAppDownload,
                            kUrlImageShareDefault,
                        SharePlatform.WECHATMOMENT,
                        (code, message) => {
                            // 分享成功：code=200
                            // ToastAndroid.show(message,ToastAndroid.SHORT);
                        });
                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image
                                        style={styles.shareIcon}
                                        source={shareIconMoments}
                                    />
                                    <Text style={styles.spinnerTitle}>
                                        朋友圈
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={() => {
                        UShare.share(title,
                            description,
                            kUrlAppDownload,
                            kUrlImageShareDefault,
                        SharePlatform.QQ,
                        (code, message) => {
                            // 分享成功：code=200
                            // ToastAndroid.show(message,ToastAndroid.SHORT);
                        });
                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image
                                        style={styles.shareIcon}
                                        source={shareIconQQ}
                                    />
                                    <Text style={styles.spinnerTitle}>
                                        QQ
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View
                    key={'spinnerLogin'}
                    style={styles.spinner}
                >
                    <View style={styles.spinnerContent}>
                        <Text style={[styles.spinnerTitle, { fontSize: 20, color: 'black' }]}>
                            授权登录
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={() => {
                                    UShare.authLogin(SharePlatform.WECHAT, (result) => {
                                        // code: 0成功、1失败、2取消
                                        console.log(result);
                                        if(result.code === 0) {

                                            //_this._loginThird(result);
                                        } else {
                                            console.log('登录授权失败！');
                                        }
                                    });
                                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image
                                        style={styles.shareIcon}
                                        source={shareIconWechat}
                                    />
                                    <Text style={styles.spinnerTitle}>
                                        微信
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={() => {
                                    UShare.authLogin(SharePlatform.QQ, (result) => {
                                        // code: 0成功、1失败、2取消
                                        console.log(result);
                                        if(result.code === 0) {

                                            //_this._loginThird(result);
                                        } else {
                                            console.log('登录授权失败！');
                                        }
                                    });
                                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image
                                        style={styles.shareIcon}
                                        source={shareIconQQ}
                                    />
                                    <Text style={styles.spinnerTitle}>
                                        QQ
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    top_layout: {
        height: 226,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    content_share: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    content_style: {
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    down_qr: {
        width: 150,
        height: 150,
    },
    qrcode_img: {
        width: 150,
        height: 150
    },
    share_img: {
        width: 260,
        height: 35,
        justifyContent: 'center',
    },
    share_btn_tv: {
        color: 'white',
        alignSelf: 'center',
        backgroundColor: '#00000000'
    },
    spinner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinnerContent: {
        justifyContent: 'center',
        width: Dimensions.get('window').width * (7 / 10),
        height: Dimensions.get('window').width * (7 / 10) * 0.68,
        backgroundColor: '#fcfcfc',
        padding: 20,
        borderRadius: 5
    },
    spinnerTitle: {
        fontSize: 18,
        color: '#313131',
        textAlign: 'center',
        marginTop: 5
    },
    shareContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shareIcon: {
        width: 40,
        height: 40
    }
});

export default ShareToFriend;
