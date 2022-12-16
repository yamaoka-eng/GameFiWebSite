import { useState, createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("English")

  const chooseLanguage = (info) => {
    if (language === "English") return info.English
    return info.Chinese
  }

  const MessageInfo = {
    English: {
      isIDO: "Participated in IDO",
      notPartner: "not a partner",
      isPartner: "already a partner",
      referralNumNotE: "Invite less than 10 people",
      unopen: "Not yet open",
      isSetInviter: "Inviters have been set",
      getSuccess: "Received successfully",
      NoRewardAva: "No reward for now",
      synthesisSuccess: "Synthetic success",
      NFTNumNotE: "NFTs have not been collected yet",
      stakeSuccess: "Stake success",
      unlockSuccess: "Unlock success",
    },
    Chinese: {
      isIDO: "已参与IDO",
      notPartner: "还不是合伙人",
      isPartner: "已是合伙人",
      referralNumNotE: "邀请未满10人",
      unopen: "暂未开放",
      isSetInviter: "已设置邀请人",
      getSuccess: "领取成功",
      NoRewardAva: "暂无奖励领取",
      synthesisSuccess: "合成成功",
      NFTNumNotE: "NFT尚未集齐",
      stakeSuccess: "质押成功",
      unlockSuccess: "解锁成功",
    },
  }

  const HeaderInfo = {
    English: {
      ulItem: [{ name: "Home", href: '/' }, { name: "Game", href: '/game' }, { name: "Market", href: '/market' }, { name: "Game Wiki", href: '/wiki' }],
      btn: "connect wallet",
    },
    Chinese: {
      ulItem: [{ name: "首页", href: '/'  }, { name: "游戏", href: '/game' }, { name: "市场", href: '/market' }, { name: "百科全书", href: '/wiki' }],
      btn: "连接钱包",
    },
  }

  const FooterInfo = {
    English: {
      section:
        "SPORT combines sports with science and technology, and is a new generation of cyberpunk products in the meta-universe. Its innovative ideas and gameplay are the forerunner of artistic NFT assets in Web3.0. SPORT believes that the maximum value of NFT is in the world of Web3.0 and the world of the meta-universe! ",
      contact: "Contact",
    },
    Chinese: {
      section:
        "SPORT 结合运动与科技，是全新一代元宇宙赛博朋克风产物，新颖的创意和玩法是Web3.0中艺术型NFT资产的先行者,SPORT 相信NFT的价值最大化是在Web3.0的世界，是在元宇宙的世界！",
      contact: "联系",
    },
  }

  return (
    <AppContext.Provider
      value={{
        setLanguage,
        MessageInfo: chooseLanguage(MessageInfo),
        HeaderInfo: chooseLanguage(HeaderInfo),
        FooterInfo: chooseLanguage(FooterInfo),
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
