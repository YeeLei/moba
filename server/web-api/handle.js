// 路由处理函数
const mongoose = require('mongoose')
const AdModel = require('../models/ad')
const CategoryModel = require('../models/category')
const ArticleModel = require('../models/article')
const HeroModel = require('../models/hero')
const VideoModel = require('../models/video')
const PicarticleModel = require('../models/picarticle')
const response = require('../utils/response')
const random = require('../utils/random')
const awaitWrap = require('../utils/error')

// 对应路由的处理函数
module.exports = {
  // 录入英雄数据
  async heroesInitHandle(req, res) {
    const rowData = [{ "name": "战士", "heroes": [{ "name": "盖伦", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10001.png", "alias": "gailun", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Garen_0.jpg", "title": "德玛西亚之力" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10009.png", "alias": "sunwukong", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/MonkeyKing_0.jpg", "title": "齐天大圣" }, { "name": "黛安娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10013.png", "alias": "daianna", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Diana_0.jpg", "title": "皎月女神" }, { "name": "泰达米尔", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10015.png", "alias": "taidamier", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Tryndamere_0.jpg", "title": "蛮族之王" }, { "name": "赵信", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10016.png", "alias": "zhaoxin", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/XinZhao_0.jpg", "title": "德邦总管" }, { "name": "潘森", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10030.png", "alias": "pansen", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Pantheon_0.jpg", "title": "不屈之枪" }, { "name": "菲奥娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10032.png", "alias": "feiaona", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Fiora_0.jpg", "title": "无双剑姬" }, { "name": "亚索", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10037.png", "alias": "yasuo", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Yasuo_0.jpg", "title": "疾风剑豪" }, { "name": "贾克斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10040.png", "alias": "jiakesi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Jax_0.jpg", "title": "武器大师" }, { "name": "希瓦娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10049.png", "alias": "xiwana", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Shyvana_0.jpg", "title": "龙血武姬" }, { "name": "蔚", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10050.png", "alias": "wei", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Vi_0.jpg", "title": "皮城执法官" }, { "name": "卡蜜尔", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10055.png", "alias": "kamier", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Camille_0.jpg", "title": "青钢影" }, { "name": "李青", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10059.png", "alias": "liqing", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/LeeSin_0.jpg", "title": "盲僧" }, { "name": "蒙多医生", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10062.png", "alias": "mengduoyisheng", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/DrMundo_0.jpg", "title": "祖安狂人" }, { "name": "内瑟斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10065.png", "alias": "neisesi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Nasus_0.jpg", "title": "沙漠死神" }, { "name": "德莱厄斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10071.png", "alias": "delaiesi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Darius_0.jpg", "title": "诺克萨斯之手" }, { "name": "锐雯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10092.png", "alias": "ruiwen", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Riven_0.jpg", "title": "放逐之刃" }, { "name": "艾瑞莉娅", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10094.png", "alias": "airuiliya", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Irelia_0.jpg", "title": "刀锋舞者" }, { "name": "杰斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10101.png", "alias": "jiesi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Jayce_0.jpg", "title": "未来守护者" }, { "name": "奥拉夫", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10106.png", "alias": "aolafu", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Olaf_0.jpg", "title": "狂战士" }, { "name": "雷克顿", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10121.png", "alias": "leikedun", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Renekton_0.jpg", "title": "荒漠屠夫" }] }, { "name": "刺客", "heroes": [{ "name": "雷恩加尔", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10006.png", "alias": "leienjiaer", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Rengar_0.jpg", "title": "傲之追猎者" }, { "name": "卡兹克", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10017.png", "alias": "kazike", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Khazix_0.jpg", "title": "虚空掠夺者" }, { "name": "伊芙琳", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10029.png", "alias": "yifulin", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Evelynn_0.jpg", "title": "痛苦之拥" }, { "name": "阿卡丽", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10031.png", "alias": "ekali", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Akali_0.jpg", "title": "离群之刺" }, { "name": "劫", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10039.png", "alias": "jie", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Zed_0.jpg", "title": "影流之主" }, { "name": "易", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10070.png", "alias": "yi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/MasterYi_0.jpg", "title": "无极剑圣" }, { "name": "菲兹", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10086.png", "alias": "feizi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Fizz_0.jpg", "title": "潮汐海灵" }, { "name": "卡特琳娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10095.png", "alias": "katelinna", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Katarina_0.jpg", "title": "不祥之刃" }, { "name": "阿克尚", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10100.png", "alias": "ekeshang", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Akshan_0.jpg", "title": "影哨" }] }, { "name": "法师", "heroes": [{ "name": "拉克丝", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10003.png", "alias": "lakesi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Lux_0.jpg", "title": "光辉女郎" }, { "name": "奥莉安娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10012.png", "alias": "aolianna", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Orianna_0.jpg", "title": "发条魔灵" }, { "name": "奥瑞利安·索尔", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10023.png", "alias": "aoruilian·suoer", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/AurelionSol_0.jpg", "title": "铸星龙王" }, { "name": "崔斯特", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10025.png", "alias": "cuisite", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/TwistedFate_0.jpg", "title": "卡牌大师" }, { "name": "萨勒芬妮", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10034.png", "alias": "salefenni", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Seraphine_0.jpg", "title": "星籁歌姬" }, { "name": "安妮", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10036.png", "alias": "anni", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Annie_0.jpg", "title": "黑暗之女" }, { "name": "阿狸", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10038.png", "alias": "eli", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Ahri_0.jpg", "title": "九尾妖狐" }, { "name": "凯南", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10061.png", "alias": "kainan", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Kennen_0.jpg", "title": "狂暴之心" }, { "name": "吉格斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10087.png", "alias": "jigesi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Ziggs_0.jpg", "title": "爆破鬼才" }, { "name": "布兰德", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10119.png", "alias": "bulande", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Brand_0.jpg", "title": "复仇焰魂" }, { "name": "维迦", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10122.png", "alias": "weijia", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Veigar_0.jpg", "title": "邪恶小法师" }] }, { "name": "射手", "heroes": [{ "name": "薇恩", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10010.png", "alias": "weien", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Vayne_0.jpg", "title": "暗夜猎手" }, { "name": "金克丝", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10018.png", "alias": "jinkesi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Jinx_0.jpg", "title": "暴走萝莉" }, { "name": "烬", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10022.png", "alias": "jin", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Jhin_0.jpg", "title": "戏命师" }, { "name": "卡莎", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10026.png", "alias": "kasha", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Kaisa_0.jpg", "title": "虚空之女" }, { "name": "卢锡安", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10042.png", "alias": "luxian", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Lucian_0.jpg", "title": "圣枪游侠" }, { "name": "崔丝塔娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10045.png", "alias": "cuisitana", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Tristana_0.jpg", "title": "麦林炮手" }, { "name": "提莫", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10046.png", "alias": "timo", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Teemo_0.jpg", "title": "迅捷斥候" }, { "name": "霞", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10051.png", "alias": "xia", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Xayah_0.jpg", "title": "逆羽" }, { "name": "库奇", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10060.png", "alias": "kuqi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Corki_0.jpg", "title": "英勇投弹手" }, { "name": "厄运小姐", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10066.png", "alias": "eyunxiaojie", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/MissFortune_0.jpg", "title": "赏金猎人" }, { "name": "格雷福斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10072.png", "alias": "geleifusi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Graves_0.jpg", "title": "枪火狂徒" }, { "name": "德莱文", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10077.png", "alias": "delaiwen", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Draven_0.jpg", "title": "荣耀行刑官" }, { "name": "艾希", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10079.png", "alias": "aixi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Ashe_0.jpg", "title": "寒冰射手" }, { "name": "韦鲁斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10093.png", "alias": "weilusi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Varus_0.jpg", "title": "惩戒之箭" }, { "name": "伊泽瑞尔", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10098.png", "alias": "yizeruier", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Ezreal_0.jpg", "title": "探险家" }, { "name": "凯特琳", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10112.png", "alias": "kaitelin", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Caitlyn_0.jpg", "title": "皮城女警" }, { "name": "赛娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10123.png", "alias": "saina", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Senna_0.jpg", "title": "涤魂圣枪" }] }, { "name": "辅助", "heroes": [{ "name": "布隆", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10021.png", "alias": "bulong", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Braum_0.jpg", "title": "弗雷尔卓德之心" }, { "name": "娑娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10047.png", "alias": "suona", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Sona_0.jpg", "title": "琴瑟仙女" }, { "name": "璐璐", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10048.png", "alias": "lulu", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Lulu_0.jpg", "title": "仙灵女巫" }, { "name": "洛", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10052.png", "alias": "luo", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Rakan_0.jpg", "title": "幻翎" }, { "name": "迦娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10075.png", "alias": "jiana", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Janna_0.jpg", "title": "风暴之怒" }, { "name": "娜美", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10091.png", "alias": "namei", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Nami_0.jpg", "title": "唤潮鲛姬" }, { "name": "索拉卡", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10097.png", "alias": "suolaka", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Soraka_0.jpg", "title": "众星之子" }, { "name": "锤石", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10130.png", "alias": "chuishi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Thresh_0.jpg", "title": "魂锁典狱长" }] }, { "name": "坦克", "heroes": [{ "name": "阿木木", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10004.png", "alias": "emumu", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Amumu_0.jpg", "title": "殇之木乃伊" }, { "name": "努努和威朗普", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10008.png", "alias": "nunuheweilangpu", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Nunu_0.jpg", "title": "雪原双子" }, { "name": "布里茨", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10033.png", "alias": "bulici", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Blitzcrank_0.jpg", "title": "蒸汽机器人" }, { "name": "蕾欧娜", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10044.png", "alias": "leiouna", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Leona_0.jpg", "title": "曙光女神" }, { "name": "嘉文四世", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10056.png", "alias": "jiawensishi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/JarvanIV_0.jpg", "title": "德玛西亚皇子" }, { "name": "拉莫斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10064.png", "alias": "lamosi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Rammus_0.jpg", "title": "披甲龙龟" }, { "name": "阿利斯塔", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10081.png", "alias": "elisita", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Alistar_0.jpg", "title": "牛头酋长" }, { "name": "墨菲特", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10083.png", "alias": "mofeite", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Malphite_0.jpg", "title": "熔岩巨兽" }, { "name": "古拉加斯", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10089.png", "alias": "gulajiasi", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Gragas_0.jpg", "title": "酒桶" }, { "name": "辛吉德", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10096.png", "alias": "xinjide", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Singed_0.jpg", "title": "炼金术士" }, { "name": "加里奥", "avatar": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/HeadIcon/H_S_10099.png", "alias": "jialiao", "banner": "https://game.gtimg.cn/images/lgamem/act/lrlib/img/Posters/Galio_0.jpg", "title": "正义巨像" }] }, { "name": "其他", "heroes": [] }]

    for (let cat of rowData) {
      // 找到当前分类在数据库中对应的数据
      const category = await CategoryModel.findOne({ name: cat.name })

      cat.heroes = cat.heroes.map(hero => {
        hero.categories = [category]
        return hero
      })

      //录入英雄
      await HeroModel.insertMany(cat.heroes)
    }
    res.send(rowData)
    res.send(await HeroModel.find())
  },

  // 首页广告
  async homeAdsHandle(req, res) {
    const homeAds = await AdModel.findById('617a168c973008d77255c86a')
    response(res, 0, '获取首页广告数据成功', homeAds.items)
  },

  // 首页新闻资讯数据
  async newsListOneHandle(req, res) {
    // 查询新闻资讯二级分类，以及属于该分类下的所有文章, 每个二级分类取前5篇文章
    const catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('6179fde964b8e1d4a798d93d') } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      }
    ])
    // 添加一个热门分类, 
    catesData.unshift({
      name: '热门',
      newsList: await ArticleModel.find().where({ hot: true })
        .populate('categories').sort({ date: -1 }).limit(5).lean()
    })
    // 给每篇文章添加一个 categoryName 字段, 热门分类就取最后一个分类的名字
    catesData.map(cate => {
      cate.newsList.map(news => {
        news.categoryName = cate.name === '热门' ?
          news.categories[news.categories.length - 1].name : cate.name
        return news
      })
      cate.newsList.sort((a, b) => {
        if (a.date > b.date) {
          return -1
        } else if (a.date == b.date) {
          return 0
        } else {
          return 1
        }
      })
      return cate
    })
    catesData.map(cate => {
      return cate.newsList = cate.newsList.slice(0, 5)
    })
    response(res, 0, '获取首页新闻数据成功', catesData)
  },

  // 文章详情
  async articleItemHandle(req, res) {
    let item = await ArticleModel.findById(req.query.id).lean()

    let related
    if (item === null) { // 是图文详情
      item = await PicarticleModel.findById(req.query.id).lean()
      let hits = item.hits + 1
      await PicarticleModel.findByIdAndUpdate(item._id, { hits })
      related = await PicarticleModel.find().where({
        categories: { $in: item.categories },
        _id: { $nin: [req.query.id] }
      })
    } else {
      // 把相关文章都查出来
      related = await ArticleModel.find().where({
        categories: { $in: item.categories },
        _id: { $nin: [req.query.id] }
      })
    }

    let hits = item.hits + 1
    await ArticleModel.findByIdAndUpdate(item._id, { hits })
    // 随机插入两篇相关文章
    item.related = []
    let r1 = random(0, related.length - 1)
    let r2 = random(0, related.length - 1)
    if (r1 == r2 == related.length - 1) {
      r2 = r2 - 1
    }
    if (r1 == r2 && r1 < related.length - 1) {
      r2 = r2 + 1
    }

    if (r1 == r2) {
      item.related.push(related[r1])
    } else {
      item.related.push(related[r1])
      item.related.push(related[r2])
    }

    response(res, 0, '获取文章详情成功', item)
  },

  // 文章列表
  async newsListTwoHandle(req, res) {
    // 获取前端传过来的参数
    let { newsType, page, pageSize } = req.query
    // 参数处理
    page = Number(page) ? Number(page) : 1
    pageSize = Number(pageSize) ? Number(pageSize) : 8
    const skip = (page - 1) * pageSize

    // 返回的新闻列表数据
    let newsList = []
    // 是否有下一页
    let hasNext = true

    if (newsType === '热门') {
      newsList = await ArticleModel.find().where({ hot: true })
        .populate('categories').limit(pageSize).skip(skip).sort({ date: -1 }).lean()
      // 热门的新闻总数
      let newsTotal = await ArticleModel.find().where({ hot: true }).countDocuments()
      // 没有下一页
      if ((skip + newsList.length) >= newsTotal) {
        hasNext = false
      }
      // 给每篇文章添加categoryName字段
      newsList.forEach(news => {
        news.categoryName = news.categories[news.categories.length - 1].name
      })
      newsList.sort((a, b) => {
        return a.date < b.date
      })
    } else {
      // 先把对应分类信息查出来
      const category = await CategoryModel.findOne().where({ name: newsType })
      // 根据分类的id取查找对应文章
      newsList = await ArticleModel.find().where({
        categories: { $in: [category._id] }
      }).populate('categories').skip(skip).limit(pageSize).sort({ date: -1 }).lean()

      // 当前分类的新闻总数
      let newsTotal = await ArticleModel.find().where({
        categories: { $in: [category._id] }
      }).countDocuments()
      // 没有下一页
      if ((skip + newsList.length) >= newsTotal) {
        hasNext = false
      }
      // 给每篇文章添加categoryName字段
      newsList.forEach(news => { news.categoryName = newsType })
      newsList.sort((a, b) => {
        return a.date < b.date
      })
    }
    response(res, 0, '获取新闻列表成功', { newsList, hasNext })
  },

  // 首页英雄数据
  async heroListOneHandle(req, res) {
    // 查询英雄二级分类，以及属于该分类下的所有英雄
    const catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('6179fe1964b8e1d4a798d93e') } },
      {
        $lookup: {
          from: 'heros',
          localField: '_id',
          foreignField: 'categories',
          as: 'heroList'
        }
      }
    ])
    // 添加一个热门分类
    catesData.unshift({
      name: '热门',
      heroList: await HeroModel.find().where({ hot: true }).limit(10)
    })
    response(res, 0, '获取首页英雄数据成功', catesData)
  },

  // 英雄详情
  async heroItemHandle(req, res) {
    const { id } = req.query
    /* 
      关联查询出该英雄所有关联的详细数据, 由于英雄关系的三个字段不是直接关联英雄表,
      而是其每一子项里面的hero字段关联英雄表, 所以需要
      两级的populate查询才行, 
      populate({
        path: 'partners',  // 表示最外层的字段
        populate: { path: 'hero', select: 'avatar' }  // select表示需取avatar字段
      })
    */
    const item = await HeroModel.findById(id)
      .populate('categories').populate('luckyEquip').populate('shitEquip')
      .populate('storeRecommend')
      .populate({
        path: 'partners',
        populate: { path: 'hero', select: 'avatar' }
      })
      .populate({
        path: 'enemies',
        populate: { path: 'hero', select: 'avatar' }
      })
      .populate({
        path: 'preies',
        populate: { path: 'hero', select: 'avatar' }
      })
    response(res, 0, '获取英雄详情成功', item)
  },

  // 英雄列表分类
  async heroCateHandle(req, res) {
    const cate = await CategoryModel.find()
      .where({ parent: '6179fe1964b8e1d4a798d93e' }).lean()
    cate.unshift({ name: '全部' })
    response(res, 0, '获取英雄分类成功', cate)
  },

  // 英雄列表数据
  async heroListTwoHandle(req, res) {
    let { heroType } = req.query
    // 返回的英雄数据
    let heroList = []

    if (heroType === '全部') {
      heroList = await HeroModel.find()
    } else {
      // 先把对应分类信息查出来
      const category = await CategoryModel.findOne().where({ name: heroType })
      // 根据分类的id取查找对应文章
      heroList = await HeroModel.find().where({
        categories: { $in: [category._id] }
      })
    }

    response(res, 0, '获取英雄列表成功', heroList)
  },

  // 首页视频数据
  async videoListOneHandle(req, res) {
    // 查询精彩视频二级分类，以及属于该分类下的所有视频
    const catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('6179fe2764b8e1d4a798d93f') } },
      {
        $lookup: {
          from: 'videos',
          localField: '_id',
          foreignField: 'category',
          as: 'videoList'
        }
      }
    ])

    catesData.map(cate => {
      cate.videoList.sort((a, b) => {
        if (a.date > b.date) {
          return -1
        } else if (a.date == b.date) {
          return 0
        } else {
          return 1
        }
      })
      cate.videoList = cate.videoList.slice(0, 4)
      return cate
    })

    response(res, 0, '获取首页视频数据成功', catesData)
  },

  // 攻略中心图文资讯二级分类
  async picarticleCateHandle(req, res) {
    const cate = await CategoryModel.find().where({ parent: '61985ee3c87743231e0e4d25' })
    response(res, 0, '获取攻略中心图文资讯二级分类成功', cate)
  },

  // 攻略中心图文资讯文章
  async picarticleHandle(req, res) {
    const params = req.query.params
    // 每页文章数量
    const pageSize = 5
    // 查询图文二级分类，以及属于该分类下的所有文章
    let catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('61985ee3c87743231e0e4d25') } },
      {
        $lookup: {
          from: 'picarticles',
          localField: '_id',
          foreignField: 'categories',
          as: 'picarticleList'
        }
      }
    ])
    // 根据params遍历 cateesDate截取每一个分类下的文章数量
    catesData.forEach((item, i) => {
      // 标记当前分类下的文章是否全部请求了
      item.hasNext = true
      let page = 1
      params.forEach((par, j) => {
        par = JSON.parse(par)
        if (par.name == item.name) {
          page = par.page
          return
        }
      })
      let skip = page * pageSize
      // 请求的文章数量大于或等于最大数量
      if (skip >= item.picarticleList.length) {
        item.hasNext = false
        skip = item.picarticleList.length
      }
      // 截取数组 0 - skip(不包括)
      item.picarticleList = item.picarticleList.slice(0, skip)
    })

    response(res, 0, '获取攻略中心图文资讯文章成功', catesData)

  },

  // 赛事中心二级分类
  async matchCateHandle(req, res) {
    const cate = await CategoryModel.find().where({ parent: '61849eec73c5253352104d2b' })
    response(res, 0, '获取赛事中心二级分类成功', cate)
  },

  // 赛事中心文章
  async matchArticleHandle(req, res) {
    const params = req.query.params
    // 每页文章数量
    const pageSize = 10
    // 查询赛事二级分类，以及属于该分类下的所有文章
    let catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('61849eec73c5253352104d2b') } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'matchList'
        }
      }
    ])
    // 根据params遍历 cateesDate截取每一个分类下的文章数量
    catesData.forEach((item, i) => {
      // 标记当前分类下的文章是否全部请求了
      item.hasNext = true
      let page = 1
      params.forEach((par, j) => {
        par = JSON.parse(par)
        if (par.name == item.name) {
          page = par.page
          return
        }
      })
      let skip = page * pageSize
      // 请求的文章数量大于或等于最大数量
      if (skip >= item.matchList.length) {
        item.hasNext = false
        skip = item.matchList.length
      }
      // 截取数组 0 - skip(不包括)
      item.matchList = item.matchList.slice(0, skip)
    })

    response(res, 0, '获取赛事中心文章成功', catesData)

  },

  // 最新英雄广告图
  async newHeroAdsHandle(req, res) {
    const newHeroAds = await AdModel.findById('617b9753621c050694c68cff')
    response(res, 0, '获取最新英雄广告数据成功', newHeroAds.items)
  },

  // 策略中心轮播图
  async strategyAdsHandle(req, res) {
    const strategyAds = await AdModel.findById('617a946c6b5762df59727c19')
    response(res, 0, '获取策略中心广告数据成功', strategyAds.items)
  },

  // 视频排行榜
  async videoRankHandle(req, res) {
    const dayRank = await VideoModel.find().limit(10).sort({ play: -1 })
    const weekRank = await VideoModel.find().skip(3).limit(10).sort({ play: -1 })
    const monthRank = await VideoModel.find().skip(6).limit(10).sort({ play: -1 })

    let catesData = [
      {
        name: '日排行',
        videoList: dayRank
      },
      {
        name: '周排行',
        videoList: weekRank
      },
      {
        name: '月排行',
        videoList: monthRank
      },
    ]
    response(res, 0, '获取视频排行数据成功', catesData)
  }

}