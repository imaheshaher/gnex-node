const mongoose = require('mongoose')
var User = new mongoose.Schema({
    local: {
        username: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    title: {
        type: String
    },
    gender: {
        type: String
    },
    fullName: String,
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    surName: {
        type: String
    },
    uid: {
        type: String
    },
    dob: {
        type: String
    },
    firstApplicant: {
        type: Boolean
    },
    parentalConsent: {
        type: String
    },
    mobileNumber: {
        type: String,
        default: null
    },
    address: {
        houseNo: String,
        area: String,
        city: String,
        state: String,
        country: String,
        postCode: String
    },
    region: {
        type: String
    },
    maritalStatus: {
        type: String,
        default: null
    },
    userId: {
        type: String,
        unique: true
    },
    regAnotherApplicant: {
        type: Boolean
    },
    familymember: [
        {
            contactid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'contacts'
            },
            relation: String
        }
    ],
    password: {
        type: String
    },
    identificationPin: {
        type: Number
    },
    emailId: {
        type: String
        // unique: true
    },
    questions: [{
        queId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'questions'
        },
        ans: String
    }],
    suggestedBy: String,
    isauthenticated: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    authTimeExpiresIn: Date,
    active: Boolean,
    token: String,
    disabledTime: Date,
    disabled: {
        type: Boolean,
        default: false
    },
    disabledTimeAuthPin: Date,
    disabledAuthPin: {
        type: Boolean,
        default: false
    },
    pwdcount: {
        type: Number,
        default: 0
    },
    pwdAttemptTime: Date,
    authpincount: {
        type: Number,
        default: 0
    },
    authpinAttemptTime: Date,
    otpdisabledTime: Date,
    otpdisabled: {
        type: Boolean,
        default: false
    },
    otpcount: {
        type: Number,
        default: 0
    },
    otp: String,
    expiresIn: Date,
    authpinOtp: String,
    authPinOtpexpiresIn: Date,
    qrcode: String,
    twoFAsecretKey: {
        type: String
    },
    twoFAenabled: {
        type: Boolean,
        default: false
    },
    otpauth_url: String,
    profileImageUrl: String,
    firstLogin: {
        type: Boolean,
        default: false
    },
    recovery: {
        alternateEmail: String,
        alternateMobile: String,
        recoveryQuestion: String,
        lastPasswords: [{ type: String }]
    },
    authPin: {
        type: String
    },
    registrationTime: {
        type: Date
    },
    invitedBy: {
        type: String
    },
    lastUpdateTime: {
        type: Date
    },
    cart: {
        products: [
            {
                productId: String,
                quantity: Number,
                price: Number
            }
        ],
        shipping_charges: {
            type: Number,
            default: 0
        },
        discount: {
            type: Number,
            default: 0
        },
        total_amount: {
            type: Number
        },
        appliedPromoCode: {
            type: String
        }
    },
    bankAccountDetails: String,
    upiId: String,
    addedBy: String,
    addedByConfirmation: {
        type: Boolean,
        default: null
    },
    relation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'relations'
    },
    passwordChangedAt: Date,
    authPinChangedAt: Date,
    changepwdexpiresIn: Date,
    membershipId: {
        type: String
    },
    mobileCountry: {
        type: String
    },
    pendingSwapOuts: [{
        swapKey: {
            type: String
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        receiver: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }],
        receiveDate: {
            type: Date
        },
        sendDate: {
            type: Date
        },
        status: {
            type: String,
            enum: ['accepted', 'pending', 'rejected'],
            default: 'pending'
        },
        pushStatus: {
            type: Boolean,
            default: false
        },
        picurl: {
            type: String
        },
        message: {
            type: String
        },
        retailerReview: {
            type: String
        },
        timestamp: Date
    }],
    isSystemGeneratedPassword: {
        type: Boolean,
        default: false
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    isTemporary: {
        type: Boolean,
        default: false
    },
    socketId: {
        type: String
    },
    firebaseId: {
        type: String
    },
    swapRequestBlockList: [
        {
            userId: String
        }
    ],
    swapDetails: {
        acceptedSwapCount: Number,
        completedSwapCount: Number,
    },
    swapClub: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'club'
    },
    swapSoldClub: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'club'
    },
    pointsAmount: Number,
    gratsAmount: Number,
    availablePointsAmountAvg: Number
})
User.methods.changesPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10)
        console.log(changedTimestamp, JWTTimestamp)
        return JWTTimestamp < changedTimestamp;
    }
    // false means password not changed!
    return false;
}
User.methods.changesAuthPinAfter = function (JWTTimestamp) {
    if (this.authPinChangedAt) {
        const changedTimestamp = parseInt(this.authPinChangedAt.getTime() / 1000, 10)
        console.log(changedTimestamp, JWTTimestamp)
        return JWTTimestamp < changedTimestamp;
    }
    // false means authPin not changed!
    return false;
}
module.exports = mongoose.model('newuser', User)