"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const review_service_1 = require("./review.service");
const user_model_1 = require("../user/user.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const review_model_1 = require("./review.model");
/* import { Review } from './review.model';
import ApiError from '../../../errors/ApiError'; */
const createReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const bookId = req.params;
    const review = __rest(req.body, []);
    let user;
    //console.log('req.user', req.user);
    if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.userEmail) {
        const { userEmail } = req.user;
        user = yield user_model_1.User.findOne({
            email: userEmail,
        });
    }
    review.user = user === null || user === void 0 ? void 0 : user._id;
    review.book = bookId.id;
    const result = yield review_service_1.ReviewService.createReview(review);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Review is uploaded Successfully',
        data: result,
    });
}));
const getAllReviewsForSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield review_service_1.ReviewService.getAllReviewsForSingleBook(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Review retrieved successfully!',
        data: result,
    });
}));
const updateReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = req.params.id;
    const updatedData = req.body;
    let user;
    if ((_b = req.user) === null || _b === void 0 ? void 0 : _b.userEmail) {
        const { userEmail } = req.user;
        user = yield user_model_1.User.findOne({
            email: userEmail,
        });
    }
    const reviewUser = yield review_model_1.Review.findById(id);
    //console.log(reviewUser);
    if (reviewUser) {
        if (!(user === null || user === void 0 ? void 0 : user._id.equals(reviewUser === null || reviewUser === void 0 ? void 0 : reviewUser.user.toString()))) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'You are not authorized to update this review');
        }
    }
    const result = yield review_service_1.ReviewService.updateReview(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Review updated successfully !',
        data: result,
    });
}));
const deleteReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = req.params.id;
    let user;
    if ((_c = req.user) === null || _c === void 0 ? void 0 : _c.userEmail) {
        const { userEmail } = req.user;
        user = yield user_model_1.User.findOne({
            email: userEmail,
        });
    }
    const reviewUser = yield review_model_1.Review.findById(id);
    if (!(user === null || user === void 0 ? void 0 : user._id.equals(String(reviewUser === null || reviewUser === void 0 ? void 0 : reviewUser.user)))) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'You are not authorized to Delete this review');
    }
    const result = yield review_service_1.ReviewService.deleteReview(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Review Deleted successfully!',
        data: result,
    });
}));
exports.ReviewController = {
    createReview,
    getAllReviewsForSingleBook,
    updateReview,
    deleteReview,
};
