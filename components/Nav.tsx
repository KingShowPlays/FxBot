"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const navLinks = [
  { name: 'Home', href: '/', isHome: true },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Community', href: '/community' },
  { name: 'Contact', href: '/contact' },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login submitted', { email, password, rememberMe });
    setIsLoginOpen(false);
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="flex justify-center">
        {/* Glass morphism nav bar */}
        <div 
          className={`relative w-full max-w-4xl backdrop-blur-xl border rounded-full px-6 py-3 shadow-2xl transition-all duration-300 ${
            scrolled 
              ? 'bg-white/10 border-white/20 shadow-xl' 
              : 'bg-white/5 border-white/10'
          }`}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none opacity-50"></div>
          
          <div className="relative flex items-center justify-between">
            {/* Logo Section */}
            <button onClick={handleHomeClick} className="flex items-center gap-3 group">
              <div className="relative transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icon-black.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 drop-shadow-lg"
                  priority
                />
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                link.isHome ? (
                  <button
                    key={link.name}
                    onClick={handleHomeClick}
                    className="relative px-5 py-2.5 text-sm font-medium text-white/90 hover:text-white rounded-full transition-all duration-300 group overflow-hidden"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full transition-all duration-300 scale-90 group-hover:scale-100"></div>
                  </button>
                ) : (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="relative px-5 py-2.5 text-sm font-medium text-white/90 hover:text-white rounded-full transition-all duration-300 group overflow-hidden"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full transition-all duration-300 scale-90 group-hover:scale-100"></div>
                  </Link>
                )
              ))}
            </div>

            {/* Login Button (Desktop) */}
            <div className="hidden md:block">
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 overflow-hidden group border-0"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">Login</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-slate-900/95 border-white/10 text-white backdrop-blur-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Welcome Back</DialogTitle>
                    <DialogDescription className="text-white/70">
                      Enter your credentials to access your account
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/90">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white/90">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="rounded border-white/10 bg-white/5 text-emerald-500 focus:ring-emerald-500/20" 
                        />
                        <span className="text-white/70">Remember me</span>
                      </label>
                      <Link href="#forgot" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                        Forgot password?
                      </Link>
                    </div>
                    <Button
                      onClick={handleLogin}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
                    >
                      Sign In
                    </Button>
                    <p className="text-center text-sm text-white/70">
                      Don't have an account?{' '}
                      <Link href="#signup" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 right-0 flex justify-center px-4 transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-4xl mt-3 p-6 rounded-3xl backdrop-blur-xl bg-slate-900/95 border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              link.isHome ? (
                <button
                  key={link.name}
                  onClick={(e) => {
                    handleHomeClick(e);
                    setIsMenuOpen(false);
                  }}
                  className="px-5 py-3.5 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-center"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </button>
              ) : (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-5 py-3.5 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-center"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            {/* Mobile Login */}
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 px-5 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/50 border-0"
                >
                  Login
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm -z-10 animate-in fade-in duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Nav;