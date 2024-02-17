// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
//import Profile from './components/profile_props'
//import Holder from './components/square'
//import PackingList from './components/props_item'
//import List from './components/list_plain'
//import List from './components/list_keys'

import Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
import Gallery from './qcomps/gallery_props'
import PackingList from './qcomps/props_item'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <MyComp />
        <Bio />
        <TodoList />
        <Gallery />
        <PackingList />
        <List />
        <RecipeList />
    </div>
  )
}
