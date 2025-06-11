import React from "react";
import { IconType } from "react-icons";
import { 
  FaGithub, 
  FaInstagram,
  FaBook,
  FaCode,
  FaMusic,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

// パーソナル情報の型定義
export interface PersonalInfo {
  // 基本情報
  name: string;
  title: string;
  location: string;
  avatarImage?: string;
  initials: string;
  description?: string;
  
  // About Me
  about: {
    paragraphs: React.ReactNode[];
  };
  
  // Tech Stack
  techStack: {
    name: string;
    icon: React.ReactNode;
  }[];
  
  // 趣味・興味
  hobbies: {
    title: string;
    description: string;
    icon: React.ReactNode;
    badges: string[];
  }[];
  
  // 教育歴
  education: {
    period: string;
    school: string;
    description: string;
    badges: string[];
    link?: string;
  }[];
  
  // ソーシャルリンク
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

// あなたのパーソナル情報をここで編集してください
export const personalInfo: PersonalInfo = {
  // 基本情報
  name: "滝嶋 研",
  title: "大学1年生・駆け出しエンジニア",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "YOUR", // アバター画像がない場合に表示されるイニシャル
  
  // About Me セクション
  about: {
    paragraphs: [
      <>linuxclubで愉快な先輩方にもまれています</>,
      <>満員電車が大嫌い</>
    ]
  },
  
  // 技術スタック
  techStack: [
    { name: "Python", icon: <IoLogoPython className="w-3 h-3 mr-1" /> },
    { name: "Java", icon: <FaJava className="w-3 h-3 mr-1"/>}
  ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Learning & Reading",
      description: "Webや授業でのインプット、Aiに練習問題出させてアウトプット",
      icon: <FaBook className="h-5 w-5 text-primary" />,
      badges: ["Clean Code", "Podcast"]
    },
    {
      title: "Development & Design",
      description: "React/Next.jsでの個人プロジェクト、UI/UX設計、新技術の実験と検証",
      icon: <FaCode className="h-5 w-5 text-primary" />,
      badges: ["React", "UI/UX"]
    },
    {
      title: "Music & Entertainment",
      description: "コーディング用BGM、Webゲームでの参考収集、技術系コンテンツの視聴、お船(wows)",
      icon: <FaMusic className="h-5 w-5 text-primary" />,
      badges: ["Lo-Fi", "Gaming"]
    }
  ],
  
  // 教育歴
  education: [
    {
      period: "2024 — 現在",
      school: "東京工科大学 コンピュータサイエンス学部",
      description: "プログラミングやWeb開発について学習中。数学概論何言ってるかよくわからない。javaとc言語も学びたい。",
      badges: ["コンピュータサイエンス学科","ユニークAI構築道場"],
      link: "https://example.com" // 学校のウェブサイトなど（オプション）
    },
    {
      period: "2021 — 2024",
      school: "おおぞら高等学院",
      description: "チームワークやリーダーシップを学び、問題解決能力を養いました。高校時代からコンピューターに興味を持ち始め、プログラミングの基礎を独学で学んでいました。",
      badges: ["リーダーシップ", "チームワーク", "独学"]
    }
  ],
  
  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/c0a2515564", // あなたのGitHubのURLに変更してください
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/ken64822274046", // あなたのX(Twitter)のURLに変更してください
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/ken_tekitou", // あなたのInstagramのURLに変更してください
      icon: <FaInstagram className="size-6" />
    },
    {
        platform: "Zenn",
        url: "https://zenn.dev/kencs", // あなたのZennのURLに変更してください
        icon: <SiZenn className="size-6" />
    }
  ]
}; 