---
title: 'A Practical Guide to Learning Vim'
date: '2019-09-17T18:49:28.000Z'
---

**Edit (Jan. 11, 2020):** Since the creation of this blog post, I've begun using standalone Vim. My opinion hasn't changed about the learning curve, and I don't think there's an overall advantage to using Vim over using an IDE/Editor with a Vim plugin. My incentive for learning Vim more in depth is because I enjoy the process of mastering the skill. The rest of this blog post will be left in its original state. Also, the [IdeaVim](https://github.com/JetBrains/ideavim) plugin for JetBrains IDEs is the best I have used, even better than Neovintageous.

A more fitting title might be "A Practical Guide to _Adopting_ Vim". I'm not an advocate of Vim as an editor, I'm a fan of modal editing, of a mouse-free text editing experience. I think Vim as an editor can be great after extensively customizing it to your liking, but again, even the process of learning how to customize Vim adds even more to the learning curve. For this reason, I recommend you continue using your editor of choice... _with a Vim plugin to enable modal editing_.

Once someone has learned the basics of Vim's keybindings, the next step is incorporating this new skill into their daily work, to develop the skill further, and train their muscle memory. One may attempt to switch to using Vim in their daily work, and quickly find their inability to be productive. Picking up Vim as an editor involves both learning Vim, and giving up all the features and keybindings you're accustomed to in your last editor. Be it VSCode, Sublime, Atom, even picking up one of these editors and maximizing your productivity in it by learning its features and keyboard shortcuts is not a trivial task.

"But Vim emulators suck, they're not as good as real Vim. Just use Vim you filthy casual." I read too many comments of this nature in r/vim...  
While some plugins emulating Vim are worse than others, this statement of inferiority should not be a barrier to entry. People should learn Vim even only at a basic level. I'm not an expert, I don't do fancy Vim trick shots in my daily editing. The most I've done is a macro, and the use case for this becomes very rare when I have multiple cursors in Sublime. I love too many of Sublime's features to give it up! That's why I feel I've struck an excellent balance of Vim features and Sublime features with my configuration. That's the beauty of this, _you can keep the config you have and incrementally adopt Vim functionality, versus diving in head first._

I'm sure you can achieve a similar level of customization and features using a plugin for some other editor of your choice. My point of reference is the Neovintageous plugin for Sublime Text, so that's what I'll be covering in the remainder of this post.

Vintage, Six, Vintageous, Neovintageous, which Vim plugin do I choose? I started with the Vintage package, which comes bundled with Sublime, but the package is set to be ignored by default. Sublime's stock offering of Vim emulation with Vintage met my needs just fine for a while, and I didn't see any reason to switch. The small tweaks I needed, such as binding jj to &lt;Esc>, was covered by a tweak to Sublime's JSON formatted settings.

I eventually discovered the power of a well configured vimrc, and went in search for how I could include one in my Sublime Vim setup. Through some random comment I stumbled across on some forum, someone mentioned the capability of the Neovintageous package to allow you to include a .neovintageous file, the equivalent of a .vimrc file. I cannot believe that this feature is not advertised more on [Neovintageous's GitHub](https://github.com/NeoVintageous/NeoVintageous) readme. While they state that it is highly configurable, there is no mention of a .neovintageousrc file in the readme. I am shocked by this.

This is a killer feature, and for me it would have been the one thing to tempt me to abandon Sublime and force myself to learn all of Vim, beyond just its modal editing. For the record, I'm not allergic to Vim. I use it every day for quick file edits, but it doesn't have the allure that Sublime does on me. When you discover the power of a .vimrc, you may become addicted to making it your own, and improving upon some of Vim's less desirable default key mappings.

I don't have a ton of modifications, but I'll share what I do have, as well as my motive behind each remap. If you want more, you can look on GitHub at some of the Vim customization repos with thousands of stars, and hundreds of lines of modifications. I prefer to keep it a little bit simpler. By the way, the file goes in your Sublime User folder with your other customizations. Example path on a Windows machine: `C:\Users\<your user>\AppData\Roaming\Sublime Text 3\Packages\User\.neovintageousrc`

Just before I get into the `.neovintageousrc`, I know of one keybinding that needs to be assigned in the regular Sublime keybinding settings, and it's the most important one:

```javascript
{
    "keys": ["j", "j"],
    "command": "_enter_normal_mode",
    "args": {"mode": "mode_insert"},
    "context": [{"key": "vi_insert_mode_aware"}]
},
```

`jj` for exiting insert mode, instead of having to reach over to press `<Esc>`. This is a popular one. `jk` is another good alternative. Onto the rest of the key mappings...  


## `.neovintageousrc`

`noremap J 5j` Shift + j moves the cursor down 5 lines  
`noremap K 5k` Shift + k moves the cursor up 5 lines  
`noremap W 5w` Shift + w moves the cursor forward 5 words  
`noremap B 5b` Shift + b moves the cursor backwards 5 words

These 4 navigation mappings just make sense to me, `J` and `K` in particular. I don't think I'd seen these elsewhere. I don't like counting lines and words every time I wanna move around in Vim, so instead I would end up spamming `j` and `k`. I think this strikes a good balance for medium distance movement, without the need to first hit an arbitrary number key, and then my intended movement command. This way, I can just hold shift and fly around.  
  
  
`noremap M J` Join lines with M

Ah but wait! I just replaced another very important default keybinding for joining lines with J. Yes, so I opted for a key next to it, M, which by default moves your cursor to the middle of the screen. This could also be a useful one, but I didn't find myself using it. Customize as you wish.  
  
  
`noremap 0 ^`  
`noremap ^ 0`

Here I'm swapping the keys responsible for moving the cursor to the beginning of the line, and moving the cursor to the first non-whitespace character (skip the indentation). The latter I find far more useful, so I made it the key that's easier to press, `0`.  
  
  
`noremap $ g_`

`$` moves the cursor to the end of the line and includes the newline character. So if you yank and paste that, you'll get an extra line. `g_` is one of those random vim bindings under the g 'namespace', and it moves the cursor to the end of the line, excluding the newline character. Much better.  
  
  
``noremap m `
noremap ` m``

Here, I'm swapping the key for creating a mark and going to a mark. I go to marks far more often than I create them, so it makes sense to me to make goto mark easier to press with `m`.  
  
  
`noremap <lt> ,` Translates to `noremap < ,` but `<` is a special character in the vimrc syntax  
`noremap , ;`

Normally when using `f` or `t` to find a character in a line, you would use `;` to jump to the next result, and `,` to jump to the previous result. What I've done here, is sort of mimic the logic of `n` and `N` for going to the next and previous result in a Vim search. You're using the same key, but holding `Shift` to do the reverse. This pattern is seen all throughout default Vim keybindings. With `,` and `<`, the mapping becomes much the same. You can think of it as `,` to jump to the next result, and `Shift + ,` to jump to the previous result.  
  
  
`noremap <C-s> :w<CR>`

Make the default keybind for saving in Vim also supported in Sublime.  
  
  
`vnoremap <Tab> >gv
vnoremap <S-Tab> <gv`

I don't know all the technicalities of this one, but what it allows is for the repeated indentation and reverse indentation of a selection in visual mode, using `Tab` and `Shift + Tab`.

That's all I've got! Have fun customizing to make it your own ~
