'use client'

import React from 'react'
import Image from 'next/image'

type SongItem = {
  type: 'song'
  title: string
  lyrics: string
  rightImage?: {
    src: string
    width: number
    height: number
  }
}

type FullWidthImageItem = {
  type: 'fullWidthImage'
  title: string
  imageUrl: string
  altText: string
}

type ContentItem = SongItem | FullWidthImageItem

const content: ContentItem[] = [
  {
    type: 'song',
    title: 'O Canada',
    lyrics:`
O Canada!
Our home and native land!
True patriot love in all of us command.
With glowing hearts we see thee rise,
The True North strong and free!
From far and wide,
O Canada, we stand on guard for thee.
God keep our land glorious and free!
O Canada, we stand on guard for thee.
O Canada, we stand on guard for thee.`,
  },
  {
    type: 'song',
    title: 'Acheinu / אַחֵינוּ',
    lyrics: `
Acheinu
kol beit yisrael,
han'nutunim b'tzarah
uvashivyah,

ha'omdim bein bayam
uvein bayabasha.

Hamakom Y'racheim Aleihem
v'yotziem
mitzra lirvacha
um'afaila l'orah
umishiabud lig'ulah,
hashta ba'agalah
uvizman kariv.

— — — — —

Our brothers
the whole house of Israel,
who are in distress
and captivity
who wander over sea
and over land —

may the All-Present have mercy on them,
and bring them
from distress to comfort,
from darkness to light,
from slavery to redemption,
now, swiftly,
and soon.

And let us say: Amen.`,
rightImage: {
  src: '/acheinu.png',
  width: 500,
  height: 500
},
  },
  {
    type: 'song',
    title: 'Kaddish–Transliteration (scroll down for translation)',
    lyrics: `
Yitgadal v'yitkadash sh'mei raba,
B'alma di-v'ra chirutei, v'yamlich malchutei,
B'chayeichon uvyomeichon uvchayei d'chol beit yisrael,
Ba'agala uvizman kariv, v'im'ru: "amen."

Y'hei sh'mei raba m'varach l'alam ul'almei almaya.

Yitbarach v'yishtabach, v'yitpa'ar v'yitromam v'yitnaseh,
v'yithadar v'yit'aleh v'yit'halal sh'mei d'kud'sha, b'rich hu,
l'eila min-kol-birchata v'shirata, tushb'chata v'nechemata, da'amiran b'alma, v'im'ru: "amen."

Y'hei shlama raba min-sh'maya v'chayim aleinu v'al-kol-yisrael, v'im'ru: "amen."
Oseh shalom bimromav, hu ya'aseh shalom aleinu v'al kol-yisrael, v'imru: "amen."`,
  },
  {
    type: 'song',
    title: 'Kaddish – Translation',
    lyrics: `
Glorified and sanctified be God's great name throughout the world
which He has created according to His will.

May He establish His kingdom in your lifetime and during your days,
and within the life of the entire House of Israel, speedily and soon;
and say, Amen.

May His great name be blessed forever and to all eternity.

Blessed and praised, glorified and exalted, extolled and honored,
adored and lauded be the name of the Holy One, blessed be He,
beyond all the blessings and hymns, praises and consolations that
are ever spoken in the world; and say, Amen.

May there be abundant peace from heaven, and life, for us
and for all Israel; and say, Amen.

He who creates peace in His celestial heights,
may He create peace for us and for all Israel;
and say, Amen.`,
  },
  {
    type: 'fullWidthImage',
    title: 'Yizkor',
    imageUrl: '/yizkor.png',
    altText: 'Yizkor',
  },
  {
    type: 'song',
    title: 'One Human Tissue /  רקמה אנושית אחת',
    lyrics: `
When I die, something of mine, something of mine
will die in you, will die in you.

When you die, something of yours, something of yours in me
will die with you, will die with you.

Because all of us, yes all of us
are all one living human tissue
and if one of us
goes from us
something dies in us –
and something, stays with him

If we know, how to comfort, how to comfort
the hostility, if only we’d know.

If we know, how to quiet our rage (if we’d know how to quiet)
upon the fury of our humiliation, to say sorry.
If we’d know how to start from the beginning.

Because all of us…`,
rightImage: {
  src: '/rikma-enoshit-achat.png',
  width: 500,
  height: 500
},
  },
  {
    type: 'song',
    title: 'Lean on Me',
    lyrics: `
Sometimes in our lives
We all have pain, we all have sorrow.
But if we are wise,
We know that there’s always tomorrow.

Lean on me when you’re not strong
And I’ll be your friend, I’ll help you carry on
For it won’t be long
‘Til I’m gonna need somebody to lean on.

Please swallow your pride
If I have things you need to borrow
For no one can fill those of your needs
That you won’t let show.

You just call on me, brother, when you need a hand
We all need somebody to lean on.
I just might have a problem that you’ll understand,
We all need somebody to lean on.

Lean on me when you’re not strong
And I’ll be your friend I’ll help you carry on
For it won’t be long
‘Til I’m gonna need somebody to lean on

You just call on me, brother, when you need a hand
We all need somebody to lean on.
I just might have a problem that you’ll understand,
We all need somebody to lean on.

If there is a load
You have to bear
That you can’t carry
I’m right up the road
I’ll share your load
If you just call me.

Call me if you need a friend
Call me, call me, uh-huh
Call me when you need a friend
Call me if you ever need a friend
Call me, call me
Call me, call me
Call me, call me
Call me, call me

Call me if you need a friend
Call me, call me
Call me, call me
Call me, call me
Call me, call me
Call me`,
  },
  {
    type: 'song',
    title: 'Habayta / Back Home / הביתה',
    lyrics: `
(You can also see the Hebrew lyrics and English translation on the screen.)

Another year has passed,
another year of madness,
the weeds have grown in the path and the garden.
The wind sighed
opening the shutter
and banging the old wall,
as if calling:

Back home, back home,
it’s time to return,
from the mountains
from foreign fields.
The day is fading and there is no sign.

Back home, back home,
before the light is dimmed.
Cold nights,
bitter nights,
closing in now.

Until the dawn
I pray for you,
bound in the grip of fear
I hear steps.

Back home, back home,
because it hasn’t yet been given
as was promised a long time ago.`,
rightImage: {
  src: '/habayta.png',
  width: 500,
  height: 700
},
  },
  {
    type: 'song',
    title: 'A Place for Worry / מקום לדאגה',
    lyrics: `
Bik’tzeh hashamaim uvesof hamidbar
yesh makom rachok male pirchei bar
makom katan, aluv umeshuga
makom rachok, makom lide’agah.

Omrim sham mah sheyikrah
vechoshvim al kol mah shekarah.
Elohim sham yoshev vero’eh
veshomer al kol mah shebara.

Asur liktof et pirchei hagan
asur liktof et pirchei hagan
vedo’eg, vedo’eg nora.

— — — — —

At the edge of the heavens and the desert
there’s a faraway place full of wild flowers
a small place, wretched and insane
a faraway place, a place for worry.

Over there they say what will happen
and think about all that has happened.
God sits there and sees
and guards over all that He created.

It’s forbidden to pick the garden flowers
It’s forbidden to pick the garden flowers
and worrying, terribly worried.`,
rightImage: {
  src: '/makom-ledeaga.png',
  width: 500,
  height: 350
},
  },
  {
    type: 'song',
    title: 'One Day',
    lyrics: `
One day, one day, one day

Sometimes I lay under the moon
And thank God I’m breathin’
Then I pray, “Don’t take me soon
‘Cause I am here for a reason”

Sometimes in my tears I drown
But I never let it get me down
So when negativity surrounds
I know someday, it’ll all turn around because

All my life, I’ve been waitin’ for
I’ve been prayin’ for, for the people to say
That we don’t wanna fight no more
There’ll be no more wars, and our children will play

One day (one day), one day (one day)
One day (oh-oh-oh)
One day (one day), one day (one day)
One day (oh-oh-oh)

It’s not about win or lose
‘Cause we all lose when they feed on the souls of the innocent
Blood-drenched pavement
Keep on movin’ though the waters stay ragin’

In this maze, you can lose your way, your way
It might drive you crazy
But don’t let it faze you, no way, no way

Sometimes in my tears I drown (I drown)
But I never let it get me down (get me down)
So when negativity surrounds (surrounds)
I know someday, it’ll all turn around because

All my life, I’ve been waitin’ for (waitin’ for)
I’ve been prayin’ for (prayin’ for), for the people to say
That we don’t wanna fight no more (fight no more)
There’ll be no more wars (no more wars), and our children will play

One day (one day), one day (one day)
One day (oh, oh, oh, oh-oh-oh, one day)
One day (one day), one day (one day)
One day (oh-oh-oh)

One day, this all will change, treat people the same
Stop with the violence, down with the hate
One day, we’ll all be free and proud to be
Under the same sun, singin’ songs of freedom like

Wah-yo (one day, one day), wah-yo, oh, oh (oh-oh-oh)
Wah-yo (one day, one day), wah-yo, oh, oh (oh-oh-oh)

All my life, I’ve been waitin’ for
I’ve been prayin’ for, for the people to say
That we don’t wanna fight no more
There’ll be no more wars, and our children will play

One day (one day), one day (one day)
One day (oh-oh-oh)
One day (one day), one day (one day)
One day (oh-oh-oh)

One day, one day, one day`,
  },
  {
    type: 'fullWidthImage',
    title: 'Hatikvah (The Hope) – Israel’s National Anthem',
    imageUrl: '/hatikva.png',
    altText: 'altText',
  },
];

export function SongList() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-700">Waterloo Region October 7th Memorial Ceremony</h1>
        {content.map((item, index) => (
          <div key={index} className="mb-12">
            {item.type === 'song' ? (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-grow">
                  <h2 className="text-3xl font-semibold mb-2 text-gray-700">{item.title}</h2>
                  <pre className="whitespace-pre-wrap font-sans text-xl text-gray-600 leading-relaxed">{item.lyrics}</pre>
                </div>
                {item.rightImage && (
                  <div className="md:w-2/5 flex-shrink-0 pt-14">
                    <div className="relative" style={{ width: item.rightImage.width, height: item.rightImage.height }}>
                      <Image
                        src={item.rightImage.src}
                        alt={`Image for ${item.title}`}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : item.type === 'fullWidthImage' ? (
              <div>
                <h2 className="text-3xl font-semibold mb-2 text-gray-700">{item.title}</h2>
                <Image
                  src={item.imageUrl}
                  alt={item.altText}
                  width={1200}
                  height={600}
                  layout="responsive"
                  objectFit="contain"></Image>
              </div>
            ) : null}
            
          </div>
        ))}
      </div>
      <h2 className="p-4 text-3xl font-semibold mb-2 text-gray-700">How to help victims of October 7th</h2>
<p className="p-4 whitespace-pre-wrap font-sans text-xl text-gray-600 leading-relaxed">
  Hostages and missing families forum: 
  <a href="https://stories.bringthemhomenow.net/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
    https://stories.bringthemhomenow.net/
  </a>
  <br />
  Tikva hostages families forum: 
  <a href="https://forum-tikva.org.il/eng/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
    https://forum-tikva.org.il/eng/
  </a>
</p>

    </div>
    
  );
}