import { ItemDefinition } from './types'
import { OFFICIAL_ITEM_DATABASE } from './officialItems'

export const CATEGORIES: { id: number; name: string }[] = [
  { id: 0x00, name: '短剑' },
  { id: 0x01, name: '太刀' },
  { id: 0x02, name: '巨剑' },
  { id: 0x03, name: '光剑' },
  { id: 0x04, name: '护肩' },
  { id: 0x05, name: '上衣' },
  { id: 0x06, name: '下衣' },
  { id: 0x07, name: '手腕' },
  { id: 0x08, name: '戒指' },
  { id: 0x09, name: '称号' },
  { id: 0x0a, name: '宠物' },
  { id: 0x0b, name: '材料' },
  { id: 0x0c, name: '卡片' },
  { id: 0x0d, name: 'HP药剂' },
  { id: 0x0e, name: 'MP药剂' },
  { id: 0x0f, name: '死塔药剂' },
  { id: 0x10, name: 'BUFF药剂' },
  { id: 0x11, name: '属性增益' },
  { id: 0x12, name: '罐子类' },
  { id: 0x13, name: '任务物品' },
]

export const ITEM_DICTIONARY: ItemDefinition[] = [
  // ==================== 称号类 (0x09) ====================
  { typeId: 0x09, itemId: 0x08, name: '瓦尔基里的灵魂', categoryName: '称号', quality: 'pink', desc: '物攻+X%, 力+30, 体+40' },
  { typeId: 0x09, itemId: 0x09, name: '背负罪责之人', categoryName: '称号', quality: 'pink', desc: '魔攻+X%, 智+30, 精+40' },
  { typeId: 0x09, itemId: 0x0a, name: '左手只是辅助', categoryName: '称号', quality: 'orange', desc: '暴击+X%, 暴伤+20%, 打击回复+50' },
  { typeId: 0x09, itemId: 0x0b, name: '芙蕾雅的祝福', categoryName: '称号', quality: 'orange', desc: '获得经验+X%, 掉率+30%, HP/MP+8' },
  { typeId: 0x09, itemId: 0x0c, name: '地下城与勇士的骄傲', categoryName: '称号', quality: 'orange', desc: '全状态+X, 移动+2, HP/MP再生+3' },

  // ==================== 宠物类 (0x0a) ====================
  { typeId: 0x0a, itemId: 0x01, name: '亚米', categoryName: '宠物', quality: 'pink', desc: 'HPMax+7%, 暴击+5%' },
  { typeId: 0x0a, itemId: 0x02, name: '贝雷斯普', categoryName: '宠物', quality: 'pink', desc: '物攻+X%, HPMAX+15%, 力量+30' },
  { typeId: 0x0a, itemId: 0x03, name: '佛尔卡斯', categoryName: '宠物', quality: 'pink', desc: '魔攻+X%, MPMAX+15%, 智力+30' },
  { typeId: 0x0a, itemId: 0x04, name: '哈良地', categoryName: '宠物', quality: 'orange', desc: '全状态+X, 削血10%, 命中+10%' },
  { typeId: 0x0a, itemId: 0x05, name: '哈帕斯', categoryName: '宠物', quality: 'pink', desc: '暴击+X%, 移动+2, 打击回复+50' },
  { typeId: 0x0a, itemId: 0x06, name: '青龙', categoryName: '宠物', quality: 'orange', desc: '经验+X%, 物品掉落率+20%, 命中+10%' },
  { typeId: 0x0a, itemId: 0x07, name: '白虎', categoryName: '宠物', quality: 'orange', desc: '自动拾取, 金币+10%, HP/MP再生+5' },

  // ==================== 材料类 (0x0b) ====================
  { typeId: 0x0b, itemId: 0x01, name: '碎布片', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x02, name: '破旧的皮革', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x03, name: '风化的碎骨', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x04, name: '生锈的铁片', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x05, name: '最下级硬化剂', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x06, name: '最下级砥石', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x07, name: '粗糙的布片', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x08, name: '轻薄的皮革', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x09, name: '加工过的碎骨', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x0a, name: '偏软的铁片', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x0b, name: '下级硬化剂', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x0c, name: '下级石', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x0d, name: '普通的布片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x0e, name: '普通皮革', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x0f, name: '普通碎骨', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x10, name: '普通的铁片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x11, name: '中级硬化剂', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x12, name: '中级石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x13, name: '厚绒布片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x14, name: '厚重的皮革', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x15, name: '粗重的碎骨', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x16, name: '坚硬的铁片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x17, name: '上级硬化剂', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x18, name: '上级石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x19, name: '高级布片', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x1a, name: '上等皮革', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x1b, name: '上等的碎骨', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x1c, name: '钢铁片', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x1d, name: '特级硬化剂', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x1e, name: '特级砥石', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x1f, name: '血滴石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x20, name: '海蓝宝石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x21, name: '金刚石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x22, name: '黑曜石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x23, name: '紫玛瑙', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x24, name: '火焰石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x25, name: '冰晶石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x26, name: '闪光石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x27, name: '暗影石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x28, name: '透明石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x29, name: '黑色小晶体', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x2a, name: '白色小晶体', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x2b, name: '红色小晶体', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x2c, name: '蓝色小晶体', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x2d, name: '无色小晶体', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x2e, name: '金色小晶块', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x2f, name: '黑色大晶体', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x30, name: '白色大晶体', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x31, name: '红色大晶体', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x32, name: '蓝色大晶体', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x33, name: '无色大晶体', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x34, name: '金色大晶体', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x35, name: '混沌魔石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x36, name: '光辉魔石碎片', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x37, name: '光辉魔石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x38, name: '下级邪念结晶', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x39, name: '中级邪念结晶', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x3a, name: '上级邪念结晶', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x3b, name: '最上级邪念结晶', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x3c, name: '克尔顿的印章', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x3d, name: '斯卡迪女王的印章', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x3e, name: '赫仑皇帝的印章', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x3f, name: '撒勒的印章', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x40, name: '燃烧的恶魔邀请函', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x41, name: '蓝色的恶魔邀请函', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x42, name: '狂暴的恶魔邀请函', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x43, name: '火焰之破魔石', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x44, name: '蒸汽之破魔石', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x45, name: '野生之破魔石', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x46, name: '火焰之宇宙之眼', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x47, name: '蒸汽之宇宙之眼', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x48, name: '野生之宇宙之眼', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x49, name: '白化碎片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x4a, name: '深渊碎片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x4b, name: '泰拉石碎片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x4c, name: '祈愿的碎片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x4d, name: '下级元素结晶', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x4e, name: '上级元素结晶', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x4f, name: '强烈的碎片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x50, name: '恐惧之源', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x51, name: '清凉的罗荆果', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x52, name: '熟透的山葡萄', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x53, name: '哥布林手骨', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x54, name: '猫妖指甲', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x55, name: '暗精灵的守护精髓', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x5a, name: '暗黑项链', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x5b, name: '龙人之眼', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x5c, name: '尖晶石', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x5d, name: '萤石', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x5e, name: '锆石', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x5f, name: '圣痕丝绸', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x60, name: '无重力碎片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x61, name: '辛达的水瓶', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x62, name: '坚韧的触须', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x63, name: '锋利的刺', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x64, name: '耀眼的结晶', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x65, name: '龙头炮的炮身', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x66, name: '邪恶的结晶', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x67, name: '柯尔克姆的干扰芯片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x68, name: '压缩胶囊', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x69, name: '劣质制造芯片', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x6a, name: '藤蔓根', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x6b, name: '黑硬的物质', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x6c, name: '破碎的刀刃', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x6d, name: '辛达加热炉使用券', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x6e, name: '锋利的狼牙', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x6f, name: '雪山野狼皮', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x70, name: '红色羊皮纸', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x71, name: '铁镐', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x72, name: '空水瓶', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x73, name: '灵魂晶石', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x74, name: '泰拉石', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x75, name: '魔力溶解剂', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x76, name: '遗忘的碎片', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x77, name: '破碎的遗忘碎片', categoryName: '材料', quality: 'blue' },
  { typeId: 0x0b, itemId: 0x78, name: '白化精华', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x7b, name: '深渊之精华', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x7d, name: '帝国的超传导精华', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x7f, name: '修炼项链', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x80, name: '研磨剂', categoryName: '材料', quality: 'white' },
  { typeId: 0x0b, itemId: 0x81, name: '背包扩展券1', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x82, name: '背包扩展券2', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x83, name: '交易许可证', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x84, name: '复活币', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x85, name: '炉岩炭', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x89, name: '幼龙心脏', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x8a, name: '黄金哥布林的钥匙', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x8f, name: '沾满血迹的传书', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x90, name: '暴龙王巴卡尔的戒指', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x91, name: '赛菲亚被撕碎的日记本', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x92, name: '牛头械王的动力引擎装置', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x93, name: '死神的邀请函', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x96, name: '奥里哈鲁根', categoryName: '材料', quality: 'purple' },
  { typeId: 0x0b, itemId: 0x97, name: '生肖', categoryName: '材料', quality: 'pink' },
  { typeId: 0x0b, itemId: 0x98, name: '被封印的气息戒指', categoryName: '材料', quality: 'orange' },
  { typeId: 0x0b, itemId: 0x99, name: '被封印的气息手镯', categoryName: '材料', quality: 'orange' },

  // ==================== 卡片类 (0x0c) ====================
  { typeId: 0x0c, itemId: 0x65, name: '魔人丹特的卡片-武器', categoryName: '卡片', quality: 'pink' },
  { typeId: 0x0c, itemId: 0x66, name: '魔人丹特的卡片-肩膀', categoryName: '卡片', quality: 'pink' },
  { typeId: 0x0c, itemId: 0x67, name: '魔人丹特的卡片-上衣', categoryName: '卡片', quality: 'pink' },
  { typeId: 0x0c, itemId: 0x68, name: '魔人丹特的卡片-下装', categoryName: '卡片', quality: 'pink' },
  { typeId: 0x0c, itemId: 0x69, name: '魔人丹特的卡片-手腕', categoryName: '卡片', quality: 'pink' },
  { typeId: 0x0c, itemId: 0x6a, name: '魔人丹特的卡片-戒指', categoryName: '卡片', quality: 'pink' },

  // ==================== HP 药剂/食物类 (0x0d / [13]) ====================
  { typeId: 0x0d, itemId: 0x01, name: 'HP 药剂 1', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0d, itemId: 0x02, name: 'HP 药剂 2', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0d, itemId: 0x03, name: 'HP 药剂 3', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0d, itemId: 0x04, name: 'HP 药剂 4', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x05, name: 'HP 药剂 5', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x06, name: 'HP 药剂 6', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0d, itemId: 0x07, name: 'HP 药剂 7', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0d, itemId: 0x08, name: '索西亚特制尔本菩提树', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x09, name: '黑麦面包', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0d, itemId: 0x0a, name: '索西亚特制尔本饮料', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x0b, name: '睡眠蛤肉', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0d, itemId: 0x0c, name: '珊瑚果冻', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x0d, name: '天空矿泉水', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x0e, name: '尔本德莱克碳酸水', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x0f, name: '罗特恩的一般用HP药剂', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x10, name: '成熟的葡萄', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0d, itemId: 0x11, name: '罗特恩的熟练者用HP药剂', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0d, itemId: 0x12, name: '索西亚特制章鱼面包', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x13, name: '全熟牛排', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x14, name: '罗特恩的专家用HP药剂', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0d, itemId: 0x15, name: '罗特恩的达人用HP药剂', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0d, itemId: 0x16, name: '大干肉', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x17, name: '敏泰的特制马奶水', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0d, itemId: 0x18, name: '健康的妖怪药剂', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0d, itemId: 0x19, name: '冷冻羊肉', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0d, itemId: 0x1a, name: '强化的幸运硬币', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0d, itemId: 0x1b, name: '罗特恩的大家用HP药剂', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0d, itemId: 0x1c, name: '尔菲的急救药', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0d, itemId: 0x1d, name: '尔菲的疲劳恢复剂', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0d, itemId: 0x1e, name: '死神的血片', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0d, itemId: 0x1f, name: '死神的无色水晶', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0d, itemId: 0x20, name: '死神的心脏', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0d, itemId: 0x21, name: '罗特恩的入门者用HP药剂', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0d, itemId: 0x22, name: '神秘药水', categoryName: '消耗品', quality: 'pink' },

  // ==================== MP 药剂/饮料类 (0x0e / [14]) ====================
  { typeId: 0x0e, itemId: 0x01, name: 'MP 药剂 1', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0e, itemId: 0x02, name: 'MP 药剂 2', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0e, itemId: 0x03, name: 'MP 药剂 3', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0e, itemId: 0x04, name: 'MP 药剂 4', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0e, itemId: 0x05, name: 'MP 药剂 5', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0e, itemId: 0x06, name: 'MP 药剂 6', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0e, itemId: 0x07, name: 'MP 药剂 7', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0e, itemId: 0x08, name: '糖饮料', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0e, itemId: 0x09, name: '罗莉安的一般用MP药剂', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0e, itemId: 0x0a, name: '空城露', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x0e, itemId: 0x0b, name: '罗莉安的熟练者用MP药剂', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0e, itemId: 0x0c, name: '罗莉安的专家用MP药剂', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0e, itemId: 0x0d, name: '提炼的魔力的精华', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0e, itemId: 0x0e, name: '冷冻牛奶袋', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0e, itemId: 0x0f, name: '聪明的妖怪药剂', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x0e, itemId: 0x10, name: '罗莉安的达人用MP药剂', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0e, itemId: 0x11, name: '罗莉安的大家用MP药剂', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0e, itemId: 0x12, name: '仙丹', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0e, itemId: 0x13, name: '力量仙丹', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0e, itemId: 0x14, name: '死亡的正气', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0e, itemId: 0x15, name: '死神之瓶', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0e, itemId: 0x16, name: '罗莉安的入门用MP药剂', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x0e, itemId: 0x17, name: '法力饮料', categoryName: '消耗品', quality: 'blue' },

  // ==================== 死塔药剂/特殊恢复类 (0x0f / [15]) ====================
  { typeId: 0x0f, itemId: 0x01, name: '死神之手', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x0f, itemId: 0x02, name: '雷米之手', categoryName: '消耗品', quality: 'pink' },

  // ==================== BUFF/特效药剂类 (0x10 / [16]) ====================
  { typeId: 0x10, itemId: 0x01, name: '状态异常恢复药剂', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x02, name: '锐眼药剂', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x03, name: '怪物力量药剂', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x04, name: '法力的悄悄话', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x05, name: '成长的秘药', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x10, itemId: 0x06, name: '幸运的秘药', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x10, itemId: 0x07, name: '急速烧瓶', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x08, name: '狂龙的皮肤', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x09, name: '深渊的犬牙', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x0a, name: '波动的犬牙', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x0b, name: '疯狂世界的锯齿', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x0c, name: '邪恶的圣水', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x0d, name: '冰之符咒', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x0e, name: '火之符咒', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x0f, name: '尖锐的妖怪药剂', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x10, name: '酷尼玛流水', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x11, name: '羊乳酸奶', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x12, name: '光之符咒', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x13, name: '暗之符咒', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x14, name: '喜悦的泪水', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x15, name: '小型成长的秘药', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x16, name: '小型幸运的秘药', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x17, name: '风药水', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x10, itemId: 0x18, name: '英雄药水', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x10, itemId: 0x19, name: '英雄的秘药', categoryName: '消耗品', quality: 'pink' },

  // ==================== 属性增益/技能书/功能消耗品 (0x11 / [17]) ====================
  { typeId: 0x11, itemId: 0x01, name: '修炼之石', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x11, itemId: 0x02, name: '精神之石', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x11, itemId: 0x03, name: '祝福之石', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x11, itemId: 0x04, name: '魔力之石', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x11, itemId: 0x05, name: 'SP+3 技能书', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x11, itemId: 0x06, name: 'SP+5 技能书', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x11, itemId: 0x07, name: '未使用', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x11, itemId: 0x08, name: '止血药剂', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x11, itemId: 0x09, name: '大世界玩具', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x11, itemId: 0x0a, name: 'SP+20 技能书', categoryName: '消耗品', quality: 'orange' },
  { typeId: 0x11, itemId: 0x0b, name: '+100经验值书', categoryName: '消耗品', quality: 'blue' },
  { typeId: 0x11, itemId: 0x0c, name: '+1000经验值书', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x11, itemId: 0x0d, name: '+10000经验值书', categoryName: '消耗品', quality: 'pink' },
  { typeId: 0x11, itemId: 0x0e, name: '+50000经验值书', categoryName: '消耗品', quality: 'orange' },
  { typeId: 0x11, itemId: 0x0f, name: '解毒药剂', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x11, itemId: 0x10, name: '烫伤恢复药剂', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x11, itemId: 0x11, name: '触电恢复药剂', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x11, itemId: 0x12, name: '暗黑恢复药剂', categoryName: '消耗品', quality: 'white' },
  { typeId: 0x11, itemId: 0x13, name: '千里眼', categoryName: '消耗品', quality: 'purple' },
  { typeId: 0x11, itemId: 0x14, name: '深渊之眼', categoryName: '消耗品', quality: 'orange' },
  { typeId: 0x11, itemId: 0x15, name: '遗忘河水', categoryName: '消耗品', quality: 'orange' },

  // ==================== 幸运罐子类 (0x12 / [18]) ====================
  { typeId: 0x12, itemId: 0x01, name: '火罐的罐子 - 武器', categoryName: '罐子类', quality: 'blue' },
  { typeId: 0x12, itemId: 0x02, name: '火罐的罐子 - 布甲', categoryName: '罐子类', quality: 'blue' },

  { typeId: 0x13, itemId: 0x98, name: '封印的魔力之痕迹', categoryName: '任务物品', quality: 'purple' },
  { typeId: 0x13, itemId: 0x90, name: '灼热的魔塔皮亚', categoryName: '任务物品', quality: 'purple' },
  { typeId: 0x13, itemId: 0x8e, name: '混沌魔石', categoryName: '任务物品', quality: 'purple' },
]

// ==================== 批量生成防具类 (护肩 0x04, 上衣 0x05, 下衣 0x06) ====================
// 格式: xx级 + 普通/高级/稀有/神器/史诗 + 防具类型
const ARMOR_DEFS: { id: number; level: number; qualityName: '神器' | '史诗'; quality: 'pink' | 'orange'; armorType: string }[] = [
  // 神器 (粉)
  { id: 0x6d, level: 10, qualityName: '神器', quality: 'pink', armorType: '布甲' },
  { id: 0x6e, level: 10, qualityName: '神器', quality: 'pink', armorType: '轻甲' },
  { id: 0x6f, level: 10, qualityName: '神器', quality: 'pink', armorType: '重甲' },
  { id: 0x70, level: 10, qualityName: '神器', quality: 'pink', armorType: '板甲' },
  { id: 0x71, level: 20, qualityName: '神器', quality: 'pink', armorType: '布甲' },
  { id: 0x72, level: 20, qualityName: '神器', quality: 'pink', armorType: '轻甲' },
  { id: 0x73, level: 20, qualityName: '神器', quality: 'pink', armorType: '重甲' },
  { id: 0x74, level: 20, qualityName: '神器', quality: 'pink', armorType: '板甲' },
  { id: 0x75, level: 30, qualityName: '神器', quality: 'pink', armorType: '布甲' },
  { id: 0x76, level: 30, qualityName: '神器', quality: 'pink', armorType: '轻甲' },
  { id: 0x77, level: 30, qualityName: '神器', quality: 'pink', armorType: '重甲' },
  { id: 0x78, level: 30, qualityName: '神器', quality: 'pink', armorType: '板甲' },
  { id: 0x79, level: 40, qualityName: '神器', quality: 'pink', armorType: '布甲' },
  { id: 0x7a, level: 40, qualityName: '神器', quality: 'pink', armorType: '轻甲' },
  { id: 0x7b, level: 40, qualityName: '神器', quality: 'pink', armorType: '重甲' },
  { id: 0x7c, level: 40, qualityName: '神器', quality: 'pink', armorType: '板甲' },
  { id: 0x7d, level: 50, qualityName: '神器', quality: 'pink', armorType: '布甲' },
  { id: 0x7e, level: 50, qualityName: '神器', quality: 'pink', armorType: '轻甲' },
  { id: 0x7f, level: 50, qualityName: '神器', quality: 'pink', armorType: '重甲' },
  { id: 0x80, level: 50, qualityName: '神器', quality: 'pink', armorType: '板甲' },
  { id: 0x81, level: 60, qualityName: '神器', quality: 'pink', armorType: '布甲' },
  { id: 0x82, level: 60, qualityName: '神器', quality: 'pink', armorType: '轻甲' },
  { id: 0x83, level: 60, qualityName: '神器', quality: 'pink', armorType: '重甲' },
  { id: 0x84, level: 60, qualityName: '神器', quality: 'pink', armorType: '板甲' },

  // 史诗 (橙)
  { id: 0x85, level: 25, qualityName: '史诗', quality: 'orange', armorType: '布甲' },
  { id: 0x86, level: 25, qualityName: '史诗', quality: 'orange', armorType: '轻甲' },
  { id: 0x87, level: 25, qualityName: '史诗', quality: 'orange', armorType: '重甲' },
  { id: 0x88, level: 25, qualityName: '史诗', quality: 'orange', armorType: '板甲' },
  { id: 0x89, level: 35, qualityName: '史诗', quality: 'orange', armorType: '布甲' },
  { id: 0x8a, level: 35, qualityName: '史诗', quality: 'orange', armorType: '轻甲' },
  { id: 0x8b, level: 35, qualityName: '史诗', quality: 'orange', armorType: '重甲' },
  { id: 0x8c, level: 35, qualityName: '史诗', quality: 'orange', armorType: '板甲' },
  { id: 0x8d, level: 45, qualityName: '史诗', quality: 'orange', armorType: '布甲' },
  { id: 0x8e, level: 45, qualityName: '史诗', quality: 'orange', armorType: '轻甲' },
  { id: 0x8f, level: 45, qualityName: '史诗', quality: 'orange', armorType: '重甲' },
  { id: 0x90, level: 45, qualityName: '史诗', quality: 'orange', armorType: '板甲' },
  { id: 0x91, level: 55, qualityName: '史诗', quality: 'orange', armorType: '布甲' },
  { id: 0x92, level: 55, qualityName: '史诗', quality: 'orange', armorType: '轻甲' },
  { id: 0x93, level: 55, qualityName: '史诗', quality: 'orange', armorType: '重甲' },
  { id: 0x94, level: 55, qualityName: '史诗', quality: 'orange', armorType: '板甲' },
  { id: 0xba, level: 60, qualityName: '史诗', quality: 'orange', armorType: '布甲' },
  { id: 0xbb, level: 60, qualityName: '史诗', quality: 'orange', armorType: '轻甲' },
  { id: 0xbc, level: 60, qualityName: '史诗', quality: 'orange', armorType: '重甲' },
  { id: 0xbd, level: 60, qualityName: '史诗', quality: 'orange', armorType: '板甲' },
]

for (const cat of [
  { typeId: 0x04, name: '护肩' },
  { typeId: 0x05, name: '上衣' },
  { typeId: 0x06, name: '下衣' },
]) {
  for (const item of ARMOR_DEFS) {
    ITEM_DICTIONARY.push({
      typeId: cat.typeId,
      itemId: item.id,
      name: `${item.level}级${item.qualityName}${item.armorType} (${cat.name})`,
      categoryName: `${cat.name}`,
      quality: item.quality,
      canRefine: true,
    })
  }
}

// ==================== 批量生成首饰类 (手腕 0x07, 戒指 0x08) ====================
// 格式: xx级 + 普通/高级/稀有/神器/史诗 + 手腕/戒指
const WRIST_DEFS: { id: number; name: string; quality: 'pink' | 'orange' }[] = [
  { id: 0x29, name: '10级神器手腕', quality: 'pink' },
  { id: 0x2a, name: '15级神器手腕', quality: 'pink' },
  { id: 0x2b, name: '20级神器手腕', quality: 'pink' },
  { id: 0x2c, name: '25级神器手腕', quality: 'pink' },
  { id: 0x2d, name: '30级神器手腕', quality: 'pink' },
  { id: 0x2e, name: '35级神器手腕', quality: 'pink' },
  { id: 0x2f, name: '40级神器手腕', quality: 'pink' },
  { id: 0x30, name: '45级神器手腕', quality: 'pink' },
  { id: 0x31, name: '50级神器手腕', quality: 'pink' },
  { id: 0x32, name: '55级神器手腕', quality: 'pink' },
  { id: 0x33, name: '60级神器手腕', quality: 'pink' },
  { id: 0x38, name: '30级史诗手腕', quality: 'orange' },
  { id: 0x39, name: '40级史诗手腕', quality: 'orange' },
  { id: 0x3a, name: '50级史诗手腕', quality: 'orange' },
  { id: 0x44, name: '60级史诗手腕A', quality: 'orange' },
  { id: 0x45, name: '60级史诗手腕B', quality: 'orange' },
  { id: 0x47, name: '60级史诗手腕C', quality: 'orange' },
  { id: 0x48, name: '60级史诗手腕D', quality: 'orange' },
  { id: 0x49, name: '60级史诗手腕E', quality: 'orange' },
  { id: 0x4a, name: '60级史诗手腕F', quality: 'orange' },
]

for (const item of WRIST_DEFS) {
  ITEM_DICTIONARY.push({
    typeId: 0x07,
    itemId: item.id,
    name: item.name,
    categoryName: '手腕',
    quality: item.quality,
    canRefine: true,
  })
}

const RING_DEFS: { id: number; name: string; quality: 'pink' | 'orange' }[] = [
  { id: 0x29, name: '10级神器戒指', quality: 'pink' },
  { id: 0x2a, name: '15级神器戒指', quality: 'pink' },
  { id: 0x2b, name: '20级神器戒指', quality: 'pink' },
  { id: 0x2c, name: '25级神器戒指', quality: 'pink' },
  { id: 0x2d, name: '30级神器戒指', quality: 'pink' },
  { id: 0x2e, name: '35级神器戒指', quality: 'pink' },
  { id: 0x2f, name: '40级神器戒指', quality: 'pink' },
  { id: 0x30, name: '45级神器戒指', quality: 'pink' },
  { id: 0x31, name: '50级神器戒指', quality: 'pink' },
  { id: 0x32, name: '55级神器戒指', quality: 'pink' },
  { id: 0x33, name: '60级神器戒指', quality: 'pink' },
  { id: 0x38, name: '30级史诗戒指', quality: 'orange' },
  { id: 0x39, name: '40级史诗戒指', quality: 'orange' },
  { id: 0x3a, name: '50级史诗戒指', quality: 'orange' },
  { id: 0x47, name: '60级史诗戒指A', quality: 'orange' },
  { id: 0x48, name: '60级史诗戒指B', quality: 'orange' },
  { id: 0x4a, name: '60级史诗戒指C', quality: 'orange' },
  { id: 0x4b, name: '60级史诗戒指D', quality: 'orange' },
  { id: 0x4c, name: '60级史诗戒指E', quality: 'orange' },
  { id: 0x4d, name: '60级史诗戒指F', quality: 'orange' },
]

for (const item of RING_DEFS) {
  ITEM_DICTIONARY.push({
    typeId: 0x08,
    itemId: item.id,
    name: item.name,
    categoryName: '戒指',
    quality: item.quality,
    canRefine: true,
  })
}

// ==================== 装备智能数格子推导引擎 (核心解析逻辑) ====================
export const ARMOR_TYPES = ['布甲', '轻甲', '重甲', '板甲'] as const

/**
 * 根据装备大类 (typeId 0x00~0x08) 和子ID (itemId)，基于同一品质递增数格子规律直接推导装备等级、品类与品质
 */
export function parseEquipment(typeId: number, itemId: number): { name: string; categoryName: string; quality: 'white' | 'blue' | 'purple' | 'pink' | 'orange'; canRefine: boolean } | null {
  // 1. 防具 (0x04 护肩, 0x05 上衣, 0x06 下衣)
  if (typeId >= 0x04 && typeId <= 0x06) {
    const catName = typeId === 0x04 ? '护肩' : typeId === 0x05 ? '上衣' : '下衣'

    // 神器 (粉): 6d ~ 84 (10级 ~ 60级，每级4种甲: 布/轻/重/板)
    if (itemId >= 0x6d && itemId <= 0x84) {
      const idx = itemId - 0x6d
      const level = 10 + Math.floor(idx / 4) * 10
      const armor = ARMOR_TYPES[idx % 4]
      return { name: `${level}级神器${armor} (${catName})`, categoryName: catName, quality: 'pink', canRefine: true }
    }

    // 史诗 (橙): 85 ~ 94 (25级 ~ 55级，每级4种甲: 布/轻/重/板)
    if (itemId >= 0x85 && itemId <= 0x94) {
      const idx = itemId - 0x85
      const level = 25 + Math.floor(idx / 4) * 10
      const armor = ARMOR_TYPES[idx % 4]
      return { name: `${level}级史诗${armor} (${catName})`, categoryName: catName, quality: 'orange', canRefine: true }
    }

    // 史诗 (橙): ba ~ bd (60级史诗防具: 布/轻/重/板)
    if (itemId >= 0xba && itemId <= 0xbd) {
      const armor = ARMOR_TYPES[(itemId - 0xba) % 4]
      return { name: `60级史诗${armor} (${catName})`, categoryName: catName, quality: 'orange', canRefine: true }
    }
    // 史诗 (橙): 95 ~ b9 (55~60级史诗防具套装)
    if (itemId >= 0x95 && itemId < 0xba) {
      const armor = ARMOR_TYPES[(itemId - 0x95) % 4]
      return { name: `60级史诗${armor} (${catName})`, categoryName: catName, quality: 'orange', canRefine: true }
    }

    // 稀有 (紫): 55 ~ 6c (10级 ~ 60级，每级4种甲: 布/轻/重/板)
    if (itemId >= 0x55 && itemId <= 0x6c) {
      const idx = itemId - 0x55
      const level = 10 + Math.floor(idx / 4) * 10
      const armor = ARMOR_TYPES[idx % 4]
      return { name: `${level}级稀有${armor} (${catName})`, categoryName: catName, quality: 'purple', canRefine: true }
    }

    // 高级 (蓝): 39 ~ 54 (10级 ~ 60级，每级4种甲: 布/轻/重/板，其中 0x45~0x48 为40级高级防具)
    if (itemId >= 0x39 && itemId <= 0x54) {
      const idx = itemId - 0x39
      const level = 10 + Math.floor(idx / 4) * 10
      const armor = ARMOR_TYPES[idx % 4]
      return { name: `${level}级高级${armor} (${catName})`, categoryName: catName, quality: 'blue', canRefine: true }
    }

    // 普通 (白): < 39 (包含1级、5级防具)
    const armor = ARMOR_TYPES[itemId % 4]
    let level = 1
    if (itemId >= 0x00 && itemId <= 0x03) level = 1
    else if (itemId >= 0x04 && itemId <= 0x07) level = 5
    else {
      level = 10 + Math.floor((itemId - 8) / 4) * 5
      if (level > 40) level = 40
    }
    return { name: `${level}级普通${armor} (${catName})`, categoryName: catName, quality: 'white', canRefine: true }
  }

  // 2. 首饰 (0x07 手腕, 0x08 戒指)
  if (typeId === 0x07 || typeId === 0x08) {
    const catName = typeId === 0x07 ? '手腕' : '戒指'

    // 60级史诗 (橙)
    const ss60Wrist = [0x44, 0x45, 0x47, 0x48, 0x49, 0x4a]
    const ss60Ring = [0x47, 0x48, 0x4a, 0x4b, 0x4c, 0x4d]
    if (typeId === 0x07 && ss60Wrist.includes(itemId)) {
      return { name: `60级史诗${catName}`, categoryName: catName, quality: 'orange', canRefine: true }
    }
    if (typeId === 0x08 && ss60Ring.includes(itemId)) {
      return { name: `60级史诗${catName}`, categoryName: catName, quality: 'orange', canRefine: true }
    }

    // 30/40/50 级史诗 (橙): 38, 39, 3a
    if (itemId >= 0x38 && itemId <= 0x3a) {
      const level = 30 + (itemId - 0x38) * 10
      return { name: `${level}级史诗${catName}`, categoryName: catName, quality: 'orange', canRefine: true }
    }

    // 神器 (粉): 29 ~ 33 (10级 ~ 60级，每5级一档: 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60级)
    if (itemId >= 0x29 && itemId <= 0x33) {
      const level = 10 + (itemId - 0x29) * 5
      return { name: `${level}级神器${catName}`, categoryName: catName, quality: 'pink', canRefine: true }
    }

    // 稀有 (紫): 1e ~ 28 (10级 ~ 60级，每5级一档)
    if (itemId >= 0x1e && itemId <= 0x28) {
      const level = 10 + (itemId - 0x1e) * 5
      return { name: `${level}级稀有${catName}`, categoryName: catName, quality: 'purple', canRefine: true }
    }

    // 高级 (蓝): 0e ~ 18 (10级 ~ 60级，每5级一档，0x14 恰好为40级高级手腕)
    if (itemId >= 0x0e && itemId <= 0x18) {
      const level = 10 + (itemId - 0x0e) * 5
      return { name: `${level}级高级${catName}`, categoryName: catName, quality: 'blue', canRefine: true }
    }

    // 普通 (白): < 0e (包含1级、5级装备)
    const level = itemId <= 0x01 ? 1 : itemId <= 0x03 ? 5 : 10
    return { name: `${level}级普通${catName}`, categoryName: catName, quality: 'white', canRefine: true }
  }

  // 3. 武器 (0x00 短剑, 0x01 太刀, 0x02 巨剑, 0x03 光剑)
  if (typeId >= 0x00 && typeId <= 0x03) {
    const wpNames = ['短剑', '太刀', '巨剑', '光剑']
    const catName = wpNames[typeId] || '武器'

    // 史诗 (橙): >= 0x51 (30级起)
    if (itemId >= 0x51) {
      let level = 30
      if (itemId === 0x51) level = 30
      else if (itemId === 0x52) level = 35
      else if (itemId === 0x53) level = 40
      else if (itemId === 0x54) level = 45
      else if (itemId === 0x55) level = 50
      else if (itemId >= 0x56 && itemId <= 0x58) level = 55
      else level = 60
      return { name: `${level}级史诗${catName}`, categoryName: catName, quality: 'orange', canRefine: true }
    }

    // 神器 (粉): 0x37 ~ 0x50 (0x39 为 20级神器太刀)
    if (itemId >= 0x37 && itemId <= 0x50) {
      let level = 20 + (itemId - 0x39) * 5
      if (level < 10) level = 10
      if (level > 60) level = 60
      return { name: `${level}级神器${catName}`, categoryName: catName, quality: 'pink', canRefine: true }
    }

    // 稀有 (紫): 0x22 ~ 0x36 (0x28 为 40级稀有太刀)
    if (itemId >= 0x22 && itemId <= 0x36) {
      let level = 40 + (itemId - 0x28) * 5
      if (level < 10) level = 10
      if (level > 60) level = 60
      return { name: `${level}级稀有${catName}`, categoryName: catName, quality: 'purple', canRefine: true }
    }

    // 高级 (蓝): 0x0e ~ 0x21 (0x14 对应40级高级)
    if (itemId >= 0x0e && itemId <= 0x21) {
      let level = 40 + (itemId - 0x14) * 5
      if (level < 10) level = 10
      if (level > 60) level = 60
      return { name: `${level}级高级${catName}`, categoryName: catName, quality: 'blue', canRefine: true }
    }

    // 普通 (白): <= 0x0d (0x09 为 40级普通太刀，包含1级、5级)
    let level = 40 + (itemId - 0x09) * 5
    if (itemId === 0x00) level = 1
    else if (itemId === 0x01) level = 5
    else if (level < 5) level = 5
    if (level > 60) level = 60
    return { name: `${level}级普通${catName}`, categoryName: catName, quality: 'white', canRefine: true }
  }

  return null
}

// ==================== 官方全量物品注入 ====================
// 将解包得到的 1797 件官方物品全量注册入 ITEM_DICTIONARY 中
const registeredKeySet = new Set<string>()
for (const item of ITEM_DICTIONARY) {
  registeredKeySet.add(`${item.typeId}_${item.itemId}`)
}

for (const [typeIdStr, items] of Object.entries(OFFICIAL_ITEM_DATABASE)) {
  const typeId = Number(typeIdStr)
  const cat = CATEGORIES.find(c => c.id === typeId)
  const categoryName = cat ? cat.name : `未知类别`
  const canRefine = typeId >= 0x00 && typeId <= 0x08

  for (const [itemIdStr, official] of Object.entries(items)) {
    const itemId = Number(itemIdStr)
    const key = `${typeId}_${itemId}`
    if (!registeredKeySet.has(key)) {
      ITEM_DICTIONARY.push({
        typeId,
        itemId,
        name: official.name,
        categoryName,
        quality: official.quality || 'white',
        canRefine,
        reqLevel: official.reqLevel,
        price: official.price,
        desc: official.reqLevel !== undefined ? `Lv.${official.reqLevel} ${official.price ? '售价:' + official.price : ''}` : undefined,
      })
      registeredKeySet.add(key)
    }
  }
}

// ==================== 品质信息与样式辅助 ====================
export interface QualityInfo {
  name: string
  label: string
  color: string
  borderColor: string
  bgColor: string
  badgeClass: string
}

export function getQualityInfo(quality?: string): QualityInfo {
  switch (quality) {
    case 'orange':
      return {
        name: '史诗',
        label: '史诗 (橙装)',
        color: 'text-amber-400',
        borderColor: 'border-amber-500/60',
        bgColor: 'bg-amber-950/40',
        badgeClass: 'bg-amber-950/70 border-amber-500/80 text-amber-300 shadow-sm shadow-amber-500/20'
      }
    case 'pink':
      return {
        name: '神器',
        label: '神器 (粉装)',
        color: 'text-fuchsia-400',
        borderColor: 'border-fuchsia-500/60',
        bgColor: 'bg-fuchsia-950/40',
        badgeClass: 'bg-fuchsia-950/70 border-fuchsia-500/80 text-fuchsia-300 shadow-sm shadow-fuchsia-500/20'
      }
    case 'purple':
      return {
        name: '稀有',
        label: '稀有 (紫装)',
        color: 'text-purple-400',
        borderColor: 'border-purple-500/60',
        bgColor: 'bg-purple-950/40',
        badgeClass: 'bg-purple-950/70 border-purple-500/80 text-purple-300'
      }
    case 'blue':
      return {
        name: '高级',
        label: '高级 (蓝装)',
        color: 'text-blue-400',
        borderColor: 'border-blue-500/60',
        bgColor: 'bg-blue-950/40',
        badgeClass: 'bg-blue-950/70 border-blue-500/80 text-blue-300'
      }
    case 'white':
    default:
      return {
        name: '普通',
        label: '普通 (白装)',
        color: 'text-gray-300',
        borderColor: 'border-gray-700',
        bgColor: 'bg-gray-900/60',
        badgeClass: 'bg-gray-800 border-gray-600 text-gray-300'
      }
  }
}

// ==================== 统一查找函数 ====================
export function findItemInfo(typeId: number, itemId: number): {
  name: string
  categoryName: string
  quality?: 'white' | 'blue' | 'purple' | 'pink' | 'orange'
  canRefine: boolean
  reqLevel?: number
  price?: number
  desc?: string
} {
  const cat = CATEGORIES.find(c => c.id === typeId)
  const catName = cat ? cat.name : `未知类别`
  const isEquip = typeId >= 0x00 && typeId <= 0x08

  // 1. 优先查官方全量解包数据库 (1797件物品完整数据)
  const official = OFFICIAL_ITEM_DATABASE[typeId]?.[itemId]
  if (official) {
    return {
      name: official.name,
      categoryName: catName,
      quality: official.quality || 'white',
      canRefine: isEquip,
      reqLevel: official.reqLevel,
      price: official.price,
      desc: official.reqLevel !== undefined ? `Lv.${official.reqLevel}` : undefined,
    }
  }

  // 2. 查精调词典
  const match = ITEM_DICTIONARY.find(i => i.typeId === typeId && i.itemId === itemId)
  if (match) {
    return {
      name: match.name,
      categoryName: match.categoryName,
      quality: match.quality,
      canRefine: !!match.canRefine || isEquip,
      reqLevel: match.reqLevel,
      price: match.price,
      desc: match.desc,
    }
  }

  // 3. 装备类数格子兜底推导引擎
  if (isEquip) {
    const parsed = parseEquipment(typeId, itemId)
    if (parsed) {
      return parsed
    }
  }

  // 4. 默认兜底
  return {
    name: `${catName} [0x${itemId.toString(16).padStart(2, '0')}]`,
    categoryName: catName,
    quality: 'white',
    canRefine: isEquip,
  }
}

export function getItemDefinition(typeId: number, itemId: number): ItemDefinition | undefined {
  const info = findItemInfo(typeId, itemId)
  return {
    typeId,
    itemId,
    name: info.name,
    categoryName: info.categoryName,
    quality: info.quality || 'white',
    canRefine: info.canRefine,
    reqLevel: info.reqLevel,
    price: info.price,
    desc: info.desc || (info.reqLevel !== undefined ? `Lv.${info.reqLevel}` : undefined),
  }
}

export function getCategoryItems(typeId: number): ItemDefinition[] {
  return getAllAvailableItems().filter(i => i.typeId === typeId)
}

let _allAvailableItemsCache: ItemDefinition[] | null = null

/**
 * 获取全量可用物品列表 (整合官方全量 1797 件物品解包数据库与精调称号宠物字典)
 */
export function getAllAvailableItems(): ItemDefinition[] {
  if (_allAvailableItemsCache) return _allAvailableItemsCache

  const map = new Map<string, ItemDefinition>()

  // 1. 载入官方解包数据库 (0x00 ~ 0x13 各类装备道具)
  for (const typeStr of Object.keys(OFFICIAL_ITEM_DATABASE)) {
    const typeId = Number(typeStr)
    const cat = CATEGORIES.find(c => c.id === typeId)
    const catName = cat ? cat.name : '其他'
    const isEquip = typeId >= 0x00 && typeId <= 0x08
    const items = OFFICIAL_ITEM_DATABASE[typeId]
    for (const itemStr of Object.keys(items)) {
      const itemId = Number(itemStr)
      const entry = items[itemId]
      const key = `${typeId}_${itemId}`
      map.set(key, {
        typeId,
        itemId,
        name: entry.name,
        categoryName: catName,
        quality: entry.quality || 'white',
        canRefine: isEquip,
        reqLevel: entry.reqLevel,
        price: entry.price,
        desc: entry.reqLevel !== undefined ? `Lv.${entry.reqLevel}` : undefined
      })
    }
  }

  // 2. 覆盖并补充精调词典 (包含称号 0x09、宠物 0x0a 及特殊属性说明)
  for (const item of ITEM_DICTIONARY) {
    const key = `${item.typeId}_${item.itemId}`
    map.set(key, item)
  }

  _allAvailableItemsCache = Array.from(map.values())
  return _allAvailableItemsCache
}
