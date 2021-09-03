import * as Live2DCubismFramework from '@lib/CubismWebFramework/src/live2dcubismframework';
const CubismFramework = Live2DCubismFramework.CubismFramework;

import * as icubismmodelsetting from '@lib/CubismWebFramework/src/icubismmodelsetting';
abstract class ICubismModelSetting extends icubismmodelsetting.Live2DCubismFramework.ICubismModelSetting {}

import * as cubismmodelsettingjson from '@lib/CubismWebFramework/src/cubismmodelsettingjson';
class CubismModelSettingJson extends cubismmodelsettingjson.Live2DCubismFramework.CubismModelSettingJson {}

// math
import * as cubismmatrix44 from '@lib/CubismWebFramework/src/math/cubismmatrix44';
class CubismMatrix44 extends cubismmatrix44.Live2DCubismFramework.CubismMatrix44 {}

import * as cubismusermodel from '@lib/CubismWebFramework/src/model/cubismusermodel';
class CubismUserModel extends cubismusermodel.Live2DCubismFramework.CubismUserModel {}

// motion
import * as acubismmotion from '@lib/CubismWebFramework/src/motion/acubismmotion';
abstract class ACubismMotion extends acubismmotion.Live2DCubismFramework.ACubismMotion {}

import * as cubismmotion from '@lib/CubismWebFramework/src/motion/cubismmotion';
class CubismMotion extends cubismmotion.Live2DCubismFramework.CubismMotion {}

import * as cubismexpressionmotion from '@lib/CubismWebFramework/src/motion/cubismexpressionmotion';
class CubismExpressionMotion extends cubismexpressionmotion.Live2DCubismFramework.CubismExpressionMotion {}

import * as cubismmotionmanager from '@lib/CubismWebFramework/src/motion/cubismmotionmanager';
class CubismMotionManager extends cubismmotionmanager.Live2DCubismFramework.CubismMotionManager {}

// physics
import * as cubismphysics from '@lib/CubismWebFramework/src/physics/cubismphysics';
class CubismPhysics extends cubismphysics.Live2DCubismFramework.CubismPhysics {}

// cubismid
import * as cubismid from '@lib/CubismWebFramework/src/id/cubismid';
type CubismIdHandle = cubismid.Live2DCubismFramework.CubismIdHandle;

// effect
import * as cubismeyeblink from '@lib/CubismWebFramework/src/effect/cubismeyeblink';
class CubismEyeBlink extends cubismeyeblink.Live2DCubismFramework.CubismEyeBlink {}

// type
import * as csmvector from '@lib/CubismWebFramework/src/type/csmvector';
class CsmVector<T> extends csmvector.Live2DCubismFramework.csmVector<T> {}

export {
	CubismFramework,
	ICubismModelSetting,
	CubismModelSettingJson,
	CubismMatrix44,
	CubismUserModel,
	ACubismMotion,
	CubismMotion,
	CubismExpressionMotion,
	CubismMotionManager,
	CubismPhysics,
	CubismEyeBlink,
	CsmVector
};

export type {
	CubismIdHandle
};
