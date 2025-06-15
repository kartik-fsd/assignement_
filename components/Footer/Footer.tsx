"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import mastercard from "../../assets/images/mastercard.png";
import amex from "../../assets/images/Amex.png";
import paypal from "../../assets/images/paypal.png";
import applePay from "../../assets/images/apple_pay.png";
import gpay from "../../assets/images/Gpay.png";
import bankPay from "../../assets/images/0pay.png";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubscribe = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!email) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert("Subscribed successfully!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Newsletter Section */}
          <section className={styles.newsletterSection}>
            <h3 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h3>
            <p className={styles.sectionDescription}>
              Sign up for updates from mettā muse.
            </p>
            <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address for newsletter subscription
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={handleEmailChange}
                className={styles.emailInput}
                required
                disabled={isSubmitting}
                aria-describedby="newsletter-desc"
              />
              <span id="newsletter-desc" className="sr-only">
                Subscribe to receive updates and news from mettā muse
              </span>
              <button
                type="submit"
                className={styles.subscribeButton}
                disabled={isSubmitting || !email}
                aria-label="Subscribe to newsletter"
              >
                {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
              </button>
            </form>
          </section>

          {/* Contact Section */}
          <section className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>CONTACT US</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <Link
                  href="tel:+442211335360"
                  aria-label="Call us at +44 221 133 5360"
                >
                  +44 221 133 5360
                </Link>
              </p>
              <p className={styles.contactItem}>
                <Link
                  href="mailto:customercare@mettamuse.com"
                  aria-label="Email customer care"
                >
                  customercare@mettamuse.com
                </Link>
              </p>
            </div>

            <h3 className={styles.sectionTitle}>CURRENCY</h3>
            <div
              className={styles.currencySelector}
              aria-label="Selected currency: US Dollar"
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwxhCMpFSg4qToHq_HKLhhU6bo5f1JJPh8w&s"
                alt="United States flag"
                height={100}
                width={100}
                className={styles.flag}
              />
              <span>USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </section>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            {/* Company Info */}
            <section className={styles.companySection}>
              <h4 className={styles.companyTitle}>mettā muse</h4>
              <nav className={styles.footerNav} aria-label="Company links">
                <Link href="#" className={styles.footerLink}>
                  About Us
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Stories
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Artisans
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Boutiques
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Contact Us
                </Link>
                <Link href="#" className={styles.footerLink}>
                  EU Compliances Docs
                </Link>
              </nav>
            </section>

            {/* Quick Links */}
            <section className={styles.quickLinksSection}>
              <h4 className={styles.sectionTitle}>QUICK LINKS</h4>
              <nav className={styles.footerNav} aria-label="Quick links">
                <Link href="#" className={styles.footerLink}>
                  Orders & Shipping
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Join/Login as a Seller
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Payment & Pricing
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Return & Refunds
                </Link>
                <Link href="#" className={styles.footerLink}>
                  FAQs
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Privacy Policy
                </Link>
                <Link href="#" className={styles.footerLink}>
                  Terms & Conditions
                </Link>
              </nav>
            </section>

            {/* Follow Us & Payment */}
            <section className={styles.socialSection}>
              <h4 className={styles.sectionTitle}>FOLLOW US</h4>
              <div
                className={styles.socialLinks}
                role="list"
                aria-label="Social media links"
              >
                <Link
                  href="#"
                  className={styles.socialLink}
                  aria-label="Follow us on Instagram"
                  role="listitem"
                >
                  <Instagram aria-label="Instagram" size={16} />
                </Link>
                <Link
                  href="#"
                  className={styles.socialLink}
                  aria-label="Follow us on LinkedIn"
                  role="listitem"
                >
                  <Linkedin aria-label="LinkedIn" />
                </Link>
              </div>

              <h4 className={styles.sectionTitle}>mettā muse ACCEPTS</h4>
              <div
                className={styles.paymentMethods}
                role="list"
                aria-label="Accepted payment methods"
              >
                <div
                  className={styles.paymentCard}
                  role="listitem"
                  aria-label="Credit card payment accepted"
                >
                  <Image
                    src={mastercard}
                    alt="Mastercard"
                    width={40}
                    height={25}
                    className={styles.paymentIcon}
                  />
                </div>
                <div
                  className={styles.paymentCard}
                  role="listitem"
                  aria-label="American Express payment accepted"
                >
                  <Image
                    src={amex}
                    alt="American Express"
                    width={40}
                    height={25}
                    className={styles.paymentIcon}
                  />
                </div>
                <div
                  className={styles.paymentCard}
                  role="listitem"
                  aria-label="PayPal payment accepted"
                >
                  <Image
                    src={paypal}
                    alt="PayPal"
                    width={40}
                    height={25}
                    className={styles.paymentIcon}
                  />
                </div>
                <div
                  className={styles.paymentCard}
                  role="listitem"
                  aria-label="Apple Pay accepted"
                >
                  <Image
                    src={applePay}
                    alt="Apple Pay"
                    width={40}
                    height={25}
                    className={styles.paymentIcon}
                  />
                </div>
                <div
                  className={styles.paymentCard}
                  role="listitem"
                  aria-label="Google Pay accepted"
                >
                  <Image
                    src={gpay}
                    alt="Google Pay"
                    width={40}
                    height={25}
                    className={styles.paymentIcon}
                  />
                </div>
                <div
                  className={styles.paymentCard}
                  role="listitem"
                  aria-label="Bank transfer accepted"
                >
                  <Image
                    src={bankPay}
                    alt="Bank transfer"
                    width={40}
                    height={25}
                    className={styles.paymentIcon}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright &copy; 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
