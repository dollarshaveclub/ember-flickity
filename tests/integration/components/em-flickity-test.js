/* jshint expr:true */
import { expect } from "chai";
import { describeComponent, it } from "ember-mocha";
import { describe } from "mocha";
import hbs from "htmlbars-inline-precompile";

const NEXT_BUTTON = ".flickity-prev-next-button.next";
const PREV_BUTTON = ".flickity-prev-next-button.previous";
const PAGE_DOTS = ".flickity-page-dots";

describeComponent("em-flickity", "Integration: EmFlickityComponent", {
  integration: true
}, function () {
  it("renders", function () {
    this.render(hbs`{{em-flickity}}`);
    expect(this.$()).to.have.length(1);
  });

  describe("showSlides", function () {
    it("hides flickity controls if false", function () {
      this.render(hbs`{{em-flickity}}`);

      expect(this.$(NEXT_BUTTON)).to.have.length(0);
      expect(this.$(PREV_BUTTON)).to.have.length(0);
    });

    it("shows flickity controls if true", function () {
      this.render(hbs`
          {{#em-flickity showSlides=true}}
            <div id="slide-1"></div>
            <div id="slide-2"></div>
          {{/em-flickity}}
      `);

      expect(this.$(NEXT_BUTTON)).to.have.length(1);
    });
  });

  it("passes options to flickity", function () {
    this.render(hbs`
        {{#em-flickity pageDots=true showSlides=true}}
        {{/em-flickity}}
        `);

    expect(this.$(PAGE_DOTS)).to.have.length(1);
  });
});
